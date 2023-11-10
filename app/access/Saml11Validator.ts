import User, { anonymousUser } from './User';
import uniqid from 'uniqid';
import { format } from 'util';
import { transform } from 'camaro';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const casUrl = process.env.NEXT_PUBLIC_CAS_URL as string;
const samlRequestTemplate = process.env.NEXT_PUBLIC_SAML_REQUEST_TEMPLATE as string;

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
            body: samlRequestBody,
        });
        const data = await response.text();
        const casUser = await transform(data, samlResponseTemplate);

        return {
            ...casUser,
            roles: [],
        } as User;
    
    } catch (error) {
        return anonymousUser;
    }
}
