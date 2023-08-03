import { NextResponse, NextRequest } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import { sessionOptions } from './access/sessionConfig';
import Role from '@/access/Role';

export const middleware = async (req: NextRequest) => {
    const res = NextResponse.next();
    const session = await getIronSession(req, res, sessionOptions);
    
    const { user } = session;
    if (user?.roles.includes(Role.ANONYMOUS)) {
        return NextResponse.redirect(new URL('/holiday', req.url));
    }

    return res;
};
  
export const config = {
    matcher: ['/contact']
};
