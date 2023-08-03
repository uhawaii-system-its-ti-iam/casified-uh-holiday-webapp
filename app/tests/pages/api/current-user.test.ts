import withSessionRouteHandler, { handler } from 'pages/api/cas/current-user';
import { createMocks } from 'node-mocks-http';
import { ApiRequest, ApiResponse } from 'tests/setupJest';
import User, { AnonymousUser } from '@/access/User';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('/api/cas/current-user', () => {

    it('should contain an AnonymousUser in the response', async () => {
        const { req, res } = createMocks<ApiRequest, ApiResponse>({
            method: 'GET',
            url: '/holiday/api/cas/current-user',
        });
        await withSessionRouteHandler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(res._getJSONData()).toEqual(AnonymousUser);
    });

    it('should contain the currentUser in the response', async () => {
        const { req, res } = createMocks<ApiRequest, ApiResponse>({
            method: 'GET',
            url: '/holiday/api/cas/current-user',
            session: { user: testUser }
        });
        await handler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(res._getJSONData()).toEqual(testUser);
    });

});
