'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { IronSession, getIronSession } from 'iron-session';
import { SessionData, SessionOptions } from './session';
import User, { anonymousUser } from './user';
import { validateTicket } from './saml-11-validator';
import { setRoles } from './authorization';
import { isDeepStrictEqual } from 'util';

const casUrl = process.env.NEXT_PUBLIC_CAS_URL as string;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

/**
 * Gets the current logged-in user.
 * 
 * @returns The current user
 */
export const getCurrentUser = async (): Promise<User> => {
    const session = await getSession();
    if (!session.user) {
        return anonymousUser;
    }
    return session.user;
}

/**
 * Redirects the user to the CAS login.
 */
export const login = (): void => {
    redirect(`${casUrl}/login?service=${encodeURIComponent(`${baseUrl}/api/cas/login`)}`);
}

/**
 * Redirects the user to the CAS logout.
 */
export const logout = (): void => {
    redirect(`${casUrl}/logout?service=${encodeURIComponent(`${baseUrl}/api/cas/logout`)}`);
}

/**
 * Validates ticket after successful CAS login, sets their roles, then saves the user to the session.
 * 
 * @remarks
 * This function is primarily used in the /api/cas/login API endpoint to catch the redirect
 * after successfully logging in through CAS.
 * 
 * @param ticket - The ticket returned from successful CAS login
 */
export const handleLogin = async (ticket: string): Promise<void> => {
    const user = await validateTicket(ticket);
    if (isDeepStrictEqual(user, anonymousUser)) {
        return;
    }
    await setRoles(user);

    const session = await getSession();
    session.user = user;
    await session.save();
};

/**
 * Removes the user from the session, therby logging them out.
 * 
 * @remarks
 * This function is primarly used in the /api/cas/logout API endpoint to catch the redirect
 * after successfully logging out through CAS.
 */
export const handleLogout = async (): Promise<void> => {
    const session = await getSession();
    session.destroy();
}

/**
 * Get the session data containing the current user stored in Iron Session.
 * 
 * @returns The session containing the current user
 */
const getSession = async (): Promise<IronSession<SessionData>> => {
    return await getIronSession<SessionData>(cookies(), SessionOptions);
}
