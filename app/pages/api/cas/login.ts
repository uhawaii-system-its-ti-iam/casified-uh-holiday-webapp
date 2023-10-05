import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '@/access/session';
import AuthenticationService from '@/access/AuthenticationService';
import AuthorizationService from '@/access/AuthorizationService';
import { AnonymousUser } from '@/access/User';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const ticket = req.query.ticket as string;

    req.session.user = await AuthenticationService.validateTicket(ticket);
    if (req.session.user === AnonymousUser) {
        res.redirect(500, baseUrl);
        return;
    }
    AuthorizationService.setRoles(req.session.user);
    await req.session.save();

    res.redirect(302, baseUrl);
}

export default withSessionRoute(handler);
