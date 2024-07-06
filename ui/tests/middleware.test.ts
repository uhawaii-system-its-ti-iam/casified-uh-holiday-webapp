import { config, middleware } from 'middleware';
import { createMockSession } from './setup-jest';
import { NextRequest, NextResponse } from 'next/server';
import IronSession from 'iron-session';
import User from '@/access/user';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('middleware', () => {

    it('should redirect the user when not logged-in', async () => {
        const redirectSpy = jest.spyOn(NextResponse, 'redirect');
        jest.spyOn(IronSession, 'getIronSession').mockResolvedValue(createMockSession(undefined));

        const req = new NextRequest(new Request(baseUrl));
        await middleware(req);

        expect(redirectSpy).toHaveBeenCalledWith(new URL(baseUrl));
    });

    it('should not redirect the user when logged-in', async () => {
        const redirectSpy = jest.spyOn(NextResponse, 'redirect');
        jest.spyOn(IronSession, 'getIronSession').mockResolvedValue(createMockSession(testUser)); 

        const req = new NextRequest(new Request(baseUrl));
        await middleware(req);

        expect(redirectSpy).not.toHaveBeenCalled();
    });

    it('should define the config with a list of matching paths', () => {
        expect(config).toBeDefined();
        expect(config.matcher).toBeDefined();
    })

});
