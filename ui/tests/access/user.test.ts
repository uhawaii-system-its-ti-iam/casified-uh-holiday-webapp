import Role from '@/access/role';
import { anonymousUser } from '@/access/user';

describe('User', () => {

    describe('anonymousUser', () => {
        
        it('should only have the Role ANONYMOUS', () => {
            expect(anonymousUser.roles.includes(Role.ANONYMOUS)).toBeTruthy();
            expect(anonymousUser.roles.includes(Role.UH)).toBeFalsy();
            expect(anonymousUser.roles.includes(Role.ADMIN)).toBeFalsy();
        });

    });

});
