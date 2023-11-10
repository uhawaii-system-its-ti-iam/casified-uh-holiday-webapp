import { setRoles } from '@/access/AuthorizationService';
import Role from '@/access/Role';
import User, { anonymousUser } from '@/access/User';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('AuthorizationService', () => {
    
    describe('setRoles', () => {

        it('should set the appropriate roles', () => {
            setRoles(testUser);
            expect(testUser.roles.includes(Role.ANONYMOUS)).toBeFalsy();
            expect(testUser.roles.includes(Role.UH)).toBeTruthy();
            expect(testUser.roles.includes(Role.ADMIN)).toBeFalsy();

            setRoles(anonymousUser);
            expect(anonymousUser.roles.includes(Role.ANONYMOUS)).toBeTruthy();
            expect(anonymousUser.roles.includes(Role.UH)).toBeFalsy();
            expect(anonymousUser.roles.includes(Role.ADMIN)).toBeFalsy();
        });

    });

});
