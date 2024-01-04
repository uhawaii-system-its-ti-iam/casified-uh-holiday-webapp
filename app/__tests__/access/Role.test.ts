import Role from '@/access/Role';

describe('Role', () => {

    it('should have the same key and value', () => {
        for (const [key, value] of Object.entries(Role)) {
            expect(key).toBe(value);
        }
    });

});
