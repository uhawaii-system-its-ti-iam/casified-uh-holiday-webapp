import User from './User';

export interface SessionData {
    user: User;
}

export const sessionOptions = {
    cookieName: 'SESSIONID',
    password: process.env.IRON_SESSION_SECRET as string,
    cookieOptions: {
        maxAge: undefined,
        secure: process.env.NODE_ENV === 'production',
    },
};
