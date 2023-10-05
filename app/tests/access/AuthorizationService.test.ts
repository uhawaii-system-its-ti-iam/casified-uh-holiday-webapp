import AuthorizationService from '@/access/AuthorizationService';
import Role from '@/access/Role';
import User from '@/access/User';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('AuthorizationService', () => {
    
    it('should set the appropriate roles', () => {
        AuthorizationService.setRoles(testUser);
        expect(testUser.roles.includes(Role.ANONYMOUS)).toBeFalsy;
        expect(testUser.roles.includes(Role.USER)).toBeTruthy;
        expect(testUser.roles.includes(Role.ADMIN)).toBeTruthy;
    });

});
