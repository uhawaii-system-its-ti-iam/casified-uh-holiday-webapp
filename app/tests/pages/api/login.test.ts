import withSessionRouteHandler, { handler } from 'pages/api/cas/login';
import { createMocks } from 'node-mocks-http';
import { ApiRequest, ApiResponse } from 'tests/setupJest';
import User, { AnonymousUser } from '@/access/User';
import Role from '@/access/Role';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const testUser: User = JSON.parse(process.env.TEST_USER_A as string);
const xmlSoapResponse = process.env.XML_SOAP_RESPONSE as string;

describe('/api/cas/login', () => {

    beforeAll(() => {
        testUser.roles.push(Role.ADMIN);
    });

    it('should save the logged-in user to the session and redirect to the baseUrl', async () => {
        fetchMock.mockResponseOnce(xmlSoapResponse);
        const { req, res } = createMocks<ApiRequest, ApiResponse>({
            method: 'GET',
            url: '/holiday/api/cas/login?ticket=ticket',
            session: { save: () => jest.fn() }
        });
        const reqSessionSaveSpy = jest.spyOn(req.session, 'save');
        await handler(req, res);

        expect(reqSessionSaveSpy).toHaveBeenCalled();
        expect(req.session.user).toEqual(testUser);
        expect(res._getStatusCode()).toBe(302);
        expect(res._getRedirectUrl()).toBe(baseUrl);
    });

    it('should not save any user to the session and redirect to the baseUrl on error', async () => {
        const { req, res } = createMocks<ApiRequest, ApiResponse>({
            method: 'GET',
            url: '/holiday/api/cas/login?ticket=ticket',
            session: { save: () => jest.fn() }
        });
        const reqSessionSaveSpy = jest.spyOn(req.session, 'save');
        await withSessionRouteHandler(req, res);

        expect(reqSessionSaveSpy).not.toHaveBeenCalled();
        expect(req.session.user).toEqual(AnonymousUser);
        expect(res._getStatusCode()).toBe(500);
        expect(res._getRedirectUrl()).toBe(baseUrl);
    });

});
