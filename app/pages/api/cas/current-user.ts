import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '@/access/session';
import { AnonymousUser } from '@/access/User';
import User from '@/access/User';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.session.user) {
        res.json(AnonymousUser);
        return;
    }
    res.status(200).json(req.session.user as User);
}
 
export default withSessionRoute(handler);
