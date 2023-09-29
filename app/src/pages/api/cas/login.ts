import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'src/access/session';
import AuthenticationService from 'src/access/AuthenticationService';
import AuthorizationService from 'src/access/AuthorizationService';
import { AnonymousUser } from 'src/access/User';

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
