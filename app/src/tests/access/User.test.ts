import Role from "src/access/Role";
import { AnonymousUser } from "src/access/User";

describe('User', () => {

    describe('AnonymousUser', () => {
        
        it('should only have Role.ANONYMOUS', () => {
            expect(AnonymousUser.roles.includes(Role.ANONYMOUS)).toBeTruthy;
            expect(AnonymousUser.roles.includes(Role.USER)).toBeFalsy;
            expect(AnonymousUser.roles.includes(Role.ADMIN)).toBeFalsy;
        });

    });

});
