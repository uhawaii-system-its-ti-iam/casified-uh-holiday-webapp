import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';
import { getIronSession } from 'iron-session';
import { SessionData, sessionOptions } from './access/Session';

export const middleware = async (req: NextRequest) => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    
    const { user } = session;
    if (!user) {
        return NextResponse.redirect(new URL('/holiday', req.url));
    }
};
  
export const config = {
    matcher: [/*'/contact'*/]
};
