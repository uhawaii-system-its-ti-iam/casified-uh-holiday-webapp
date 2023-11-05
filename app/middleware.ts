import { NextResponse, NextRequest } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import { sessionOptions } from './access/sessionConfig';

export const middleware = async (req: NextRequest) => {
    const res = NextResponse.next();
    const session = await getIronSession(req, res, sessionOptions);
    
    const { user } = session;
    if (!user) {
        return NextResponse.redirect(new URL('/holiday', req.url));
    }

    return res;
};
  
export const config = {
    matcher: ['/contact']
};
