import Role from '@/access/Role';
import { anonymousUser } from '@/access/User';

describe('User', () => {

    describe('anonymousUser', () => {
        
        it('should only have the Role ANONYMOUS', () => {
            expect(anonymousUser.roles.includes(Role.ANONYMOUS)).toBeTruthy();
            expect(anonymousUser.roles.includes(Role.UH)).toBeFalsy();
            expect(anonymousUser.roles.includes(Role.ADMIN)).toBeFalsy();
        });

    });

});
