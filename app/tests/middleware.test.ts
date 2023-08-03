import { config, middleware } from 'middleware';
import { NextRequest, NextResponse } from 'next/server';
import * as IronSession from 'iron-session/edge'
import User, { AnonymousUser } from '@/access/User';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

jest.mock('iron-session/edge', () => ({
    ...jest.requireActual('iron-session/edge'),
    getIronSession: jest.fn(),
}));

describe('middleware', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should redirect the user when not logged-in', async () => {
        const redirectSpy = jest.spyOn(NextResponse, 'redirect');
        jest.spyOn(IronSession, 'getIronSession').mockResolvedValue({
            user: AnonymousUser,
            destroy: jest.fn(),
            save: jest.fn(),
        });

        const req = new NextRequest(new Request(baseUrl));
        await middleware(req);

        expect(redirectSpy).toHaveBeenCalledWith(new URL(baseUrl));
    });

    it('should not redirect the user when logged-in', async () => {
        const redirectSpy = jest.spyOn(NextResponse, 'redirect');
        jest.spyOn(IronSession, 'getIronSession').mockResolvedValue({ 
            user: testUser,
            destroy: jest.fn(),
            save: jest.fn(),
        }); 

        const req = new NextRequest(new Request(baseUrl));
        await middleware(req);

        expect(redirectSpy).not.toHaveBeenCalled();
    });

    it('should define the config with a list of matching paths', () => {
        expect(config).toBeDefined();
        expect(config.matcher).toBeDefined();
    })

});
