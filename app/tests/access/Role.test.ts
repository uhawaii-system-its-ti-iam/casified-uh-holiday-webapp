import Role from "@/access/Role";

describe('Role', () => {

    it('should match the string', () => {
        expect(Role.ANONYMOUS).toEqual("ANONYMOUS");
        expect(Role.ADMIN).toEqual("ADMIN");
        expect(Role.USER).toEqual("USER");
    });

});
