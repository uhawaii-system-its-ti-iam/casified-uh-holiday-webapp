import { GET } from 'app/api/cas/logout/route';
import { redirect } from 'next/navigation';
import { handleLogout } from '@/access/AuthenticationService';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

jest.mock('@/access/AuthenticationService');

describe('/api/cas/logout', () => {

    it('should call handleLogout', async () => {
        await GET();
        expect(handleLogout).toHaveBeenCalled();
    });

    it('should redirect to the baseUrl', async () => {
        await GET();
        expect(redirect).toHaveBeenCalledWith(baseUrl);
    });

});
