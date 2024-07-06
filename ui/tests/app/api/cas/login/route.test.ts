import { GET } from '@/app/api/cas/login/route';
import { redirect } from 'next/navigation';
import { handleLogin } from '@/access/authentication';
import { NextRequest } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

jest.mock('@/access/authentication');

describe('/api/cas/login', () => {

    const nextRequest = new NextRequest(new URL('/api/cas/login?ticket=ticket1', baseUrl));

    it('should call handleLogin with ticket from search param', async () => {
        await GET(nextRequest);
        expect(handleLogin).toHaveBeenCalledWith('ticket1');
    });

    it('should redirect to the baseUrl', async () => {
        await GET(nextRequest);
        expect(redirect).toHaveBeenCalledWith(baseUrl);
    });

});
