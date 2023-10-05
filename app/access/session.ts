import { NextApiHandler } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from './sessionConfig';

export const withSessionRoute = (handler: NextApiHandler) => {
    return withIronSessionApiRoute(handler, sessionOptions);
};
