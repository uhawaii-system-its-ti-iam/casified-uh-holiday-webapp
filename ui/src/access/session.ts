import User from './user';

export interface SessionData {
    user: User;
}

export const SessionOptions = {
    cookieName: 'SESSIONID',
    password: process.env.IRON_SESSION_SECRET as string,
    cookieOptions: {
        maxAge: undefined,
        secure: process.env.NODE_ENV === 'production',
    },
};
