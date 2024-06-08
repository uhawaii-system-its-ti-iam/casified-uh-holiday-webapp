import Role from '@/access/role';

describe('role', () => {

    it('should have the same key and value', () => {
        for (const [key, value] of Object.entries(Role)) {
            expect(key).toBe(value);
        }
    });

});
