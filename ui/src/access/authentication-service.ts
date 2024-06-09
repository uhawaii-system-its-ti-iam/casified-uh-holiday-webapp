'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { IronSession, getIronSession } from 'iron-session';
import { SessionData, sessionOptions } from './session';
import User, { anonymousUser } from './user';
import { validateTicket } from './sam-l11-validator';
import { setRoles } from './authorization-service';
import Role from './role';

const casUrl = process.env.NEXT_PUBLIC_CAS_URL as string;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const getCurrentUser = async (): Promise<User> => {
    const session = await getSession();
    if (!session.user) {
        return anonymousUser;
    }
    return session.user;
}

export const login = (): void => {
    redirect(`${casUrl}/login?service=${encodeURIComponent(`${baseUrl}/api/cas/login`)}`);
}

export const logout = (): void => {
    redirect(`${casUrl}/logout?service=${encodeURIComponent(`${baseUrl}/api/cas/logout`)}`);
}

export const handleLogin = async (ticket: string): Promise<void> => {
    const user = await validateTicket(ticket);
    if (user.roles.includes(Role.ANONYMOUS)) {
        return;
    }
    setRoles(user);

    const session = await getSession();
    session.user = user;
    await session.save();
};
    
export const handleLogout = async (): Promise<void> => {
    const session = await getSession();
    session.destroy();
}

const getSession = async (): Promise<IronSession<SessionData>> => {
    return await getIronSession<SessionData>(cookies(), sessionOptions);
}
