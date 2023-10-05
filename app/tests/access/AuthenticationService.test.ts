import AuthenticationService from '@/access/AuthenticationService';
import User, { AnonymousUser } from '@/access/User';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);
const xmlSoapResponse = process.env.XML_SOAP_RESPONSE as string;

describe('AuthenticationService', () => {

    describe('validateTicket', () => {
        
        it('should return the user on success', async () => {
            fetchMock.mockResponse(xmlSoapResponse);
            expect(await AuthenticationService.validateTicket('ticket')).toEqual(testUser);
        });

        it('should return an AnonymousUser on error', async () => {
            fetchMock.mockAbort();
            expect(await AuthenticationService.validateTicket('ticket')).toEqual(AnonymousUser);
        });

    });

});
