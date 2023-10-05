import User from './User';

declare module 'iron-session' {
    interface IronSessionData {
        user?: User;
    }
}

export const sessionOptions = {
    cookieName: 'SESSIONID',
    password: process.env.IRON_SESSION_SECRET as string,
    cookieOptions: {
        maxAge: undefined,
        secure: process.env.NODE_ENV === 'production',
    },
};
