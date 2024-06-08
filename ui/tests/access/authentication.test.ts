import { getCurrentUser, login, logout, handleLogin, handleLogout } from '@/access/authentication';
import { createMockSession } from '../setup-jest';
import User, { anonymousUser } from '@/access/user';
import { redirect } from 'next/navigation';
import IronSession from 'iron-session';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const casUrl = process.env.NEXT_PUBLIC_CAS_URL as string;
const testUser: User = JSON.parse(process.env.TEST_USER_A as string);
const xmlSoapResponse = process.env.XML_SOAP_RESPONSE as string;

describe('authentication', () => {

    describe('getCurrentUser', () => {
        
        it('should return the currentUser', async () => {
            jest.spyOn(IronSession, 'getIronSession').mockResolvedValue(createMockSession(testUser));

            expect(await getCurrentUser()).toEqual(testUser);
        });

        it('should return an AnonymousUser when nothing is stored in the session', async () => {
            jest.spyOn(IronSession, 'getIronSession').mockResolvedValue(createMockSession(undefined));

            expect(await getCurrentUser()).toEqual(anonymousUser);
        });

    });

    describe('login', () => {

        it('should visit the CAS login url', () => {
            const casLoginUrl = `${casUrl}/login?service=${encodeURIComponent(`${baseUrl}/api/cas/login`)}`;
            login();
            expect(redirect).toHaveBeenCalledWith(casLoginUrl);
        });

    });

    describe('logout', () => {

        it('should visit the CAS logout url', async () => {
            const casLogoutUrl = `${casUrl}/logout?service=${encodeURIComponent(`${baseUrl}/api/cas/logout`)}`;
            logout();
            expect(redirect).toHaveBeenCalledWith(casLogoutUrl);
        });

    });

    describe('handleLogin', () => {

        it('should return when ticket to validate is invalid', async () => {
            fetchMock.mockAbort();
            const getIronSessionSpy = jest.spyOn(IronSession, 'getIronSession');

            await handleLogin('ticket');

            expect(getIronSessionSpy).not.toHaveBeenCalled();
        });

        it('should save the user to the session', async () => {
            fetchMock.mockResponse(xmlSoapResponse);

            const session = createMockSession(testUser);
            jest.spyOn(IronSession, 'getIronSession').mockResolvedValue(session);
            const sessionSaveSpy = jest.spyOn(session, 'save');
            
            await handleLogin('ticket');

            expect(sessionSaveSpy).toHaveBeenCalled();
        });

    });

    describe('handleLogout', () => {

        it('should destroy the session', async () => {
            const session = createMockSession(testUser);
            jest.spyOn(IronSession, 'getIronSession').mockResolvedValue(session);
            const sessionDestroySpy = jest.spyOn(session, 'destroy');

            await handleLogout();

            expect(sessionDestroySpy).toHaveBeenCalled();
        });

    });

});
