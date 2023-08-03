import withSessionRouteHandler, { handler } from 'pages/api/cas/logout';
import { createMocks } from 'node-mocks-http';
import { ApiRequest, ApiResponse } from 'tests/setupJest';
import User from '@/access/User';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('/api/cas/logout', () => {

    it('should destroy the session object', async () => {
        const { req, res } = createMocks<ApiRequest, ApiResponse>({
            method: 'GET',
            url: '/holiday/api/cas/logout',
            session: { user: testUser, destroy: () => jest.fn() }
        });
        const reqSessionDestroySpy = jest.spyOn(req.session, 'destroy');
        await handler(req, res);

        expect(reqSessionDestroySpy).toHaveBeenCalled();
    });

    it('should redirect to the baseUrl', async () => {
        const { req, res } = createMocks<ApiRequest, ApiResponse>({
            method: 'GET',
            url: '/holiday/api/cas/logout',
            session: { user: testUser, destroy: () => jest.fn() }
        });
        await withSessionRouteHandler(req, res);

        expect(res._getStatusCode()).toEqual(302);
        expect(res._getRedirectUrl()).toBe(baseUrl);
    });

});
