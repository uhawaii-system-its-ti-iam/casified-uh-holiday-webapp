import User, { anonymousUser } from './user';
import uniqid from 'uniqid';
import { format } from 'util';
import { transform } from 'camaro';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const casUrl = process.env.NEXT_PUBLIC_CAS_URL as string;
const samlRequestTemplate = process.env.NEXT_PUBLIC_SAML_REQUEST_TEMPLATE as string;

/**
 * Validates ticket by calling the /samlValidate endpoint of CAS server with the ticket formatted as a SAML.
 * Then the CAS server responds with a SAML containing the user, which is then transformed into the User type.
 * 
 * @param ticket - The ticket returned from successful CAS login
 * 
 * @returns The user from the ticket or an AnonymousUser if error occurs
 */
export const validateTicket = async (ticket: string): Promise<User> => {
    const samlValidateUrl = `${casUrl}/samlValidate?TARGET=${encodeURIComponent(`${baseUrl}/api/cas/login`)}`;
    const samlResponseTemplate = {
        name: '//*[local-name() = "Attribute"][@AttributeName="cn"]',
        firstName: '//*[local-name() = "Attribute"][@AttributeName="givenName"]',
        lastName: '//*[local-name() = "Attribute"][@AttributeName="sn"]',
        uid: '//*[local-name() = "Attribute"][@AttributeName="uid"]',
        uhUuid: '//*[local-name() = "Attribute"][@AttributeName="uhUuid"]',
    };

    const currentDate = new Date().toISOString();
    const samlRequestBody = format(samlRequestTemplate, `${uniqid()}.${currentDate}`, currentDate, ticket);
    
    try {
        const response = await fetch(samlValidateUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/xml' },
            body: samlRequestBody
        });
        const data = await response.text();

        const { statusCode }: { statusCode: string } = await transform(data, {
            statusCode: '//*[local-name() = "Status"]/*[local-name() ="StatusCode"]/@Value'
        });

        if (statusCode.endsWith('RequestDenied')) {
            throw new Error('Invalid ticket');
        }

        const casUser = await transform(data, samlResponseTemplate);

        return {
            ...casUser,
            roles: []
        } as User;
    
    } catch (error) {
        return anonymousUser;
    }
}
