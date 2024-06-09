import { validateTicket } from '@/access/sam-l11-validator';
import User, { anonymousUser } from '@/access/user';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);
const xmlSoapResponse = process.env.XML_SOAP_RESPONSE as string;

describe('Saml11Validator', () => {

    describe('validateTicket', () => {
        
        it('should return the user on success', async () => {
            fetchMock.mockResponse(xmlSoapResponse);
            expect(await validateTicket('ticket')).toEqual(testUser);
        });

        it('should return an AnonymousUser on error', async () => {
            fetchMock.mockAbort();
            expect(await validateTicket('ticket')).toEqual(anonymousUser);
        });

    });

});
