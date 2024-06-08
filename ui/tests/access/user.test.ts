import Role from '@/access/role';
import { anonymousUser } from '@/access/user';

describe('user', () => {

    describe('AnonymousUser', () => {
        
        it('should only have the Role ANONYMOUS', () => {
            expect(anonymousUser.roles.includes(Role.ANONYMOUS)).toBeTruthy();
            expect(anonymousUser.roles.includes(Role.UH)).toBeFalsy();
            expect(anonymousUser.roles.includes(Role.ADMIN)).toBeFalsy();
            expect(anonymousUser.roles.includes(Role.OWNER)).toBeFalsy();
        });

    });

});
