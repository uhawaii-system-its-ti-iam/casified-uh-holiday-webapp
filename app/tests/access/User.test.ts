import Role from "@/access/Role";
import { AnonymousUser } from "@/access/User";

describe('User', () => {

    describe('AnonymousUser', () => {
        
        it('should only have Role.ANONYMOUS', () => {
            expect(AnonymousUser.roles.includes(Role.ANONYMOUS)).toBeTruthy;
            expect(AnonymousUser.roles.includes(Role.USER)).toBeFalsy;
            expect(AnonymousUser.roles.includes(Role.ADMIN)).toBeFalsy;
        });

    });

});
