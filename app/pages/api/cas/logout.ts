import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '@/access/session';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    req.session.destroy();
    res.redirect(302, baseUrl);
}
 
export default withSessionRoute(handler);
