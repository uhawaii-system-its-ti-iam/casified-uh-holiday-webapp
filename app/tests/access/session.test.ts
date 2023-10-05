import { withSessionRoute } from '@/access/session';
import { withIronSessionApiRoute } from 'iron-session/next';
jest.mock('iron-session/next');

describe('Session', () => {

    describe('withSessionRoute', () => {

        it('should call withIronSessionApiRoute()', () => {
            withSessionRoute(jest.fn());
            expect(withIronSessionApiRoute).toHaveBeenCalled();
        });

    });

});
