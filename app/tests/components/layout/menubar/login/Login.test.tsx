import { act, render, screen, fireEvent } from '@testing-library/react';
import Login from '@/components/layout/menubar/login/Login';
import { CasUserContextProvider } from '@/access/useCasUserContext';
import User, { AnonymousUser } from '@/access/User';

const casUrl = process.env.NEXT_PUBLIC_CAS_URL as string;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('Login', () => {

    describe('User is not logged in', () => {

        beforeEach(async () => {
            fetchMock.mockResponseOnce(JSON.stringify(AnonymousUser));
            await act(() => {
                render(<CasUserContextProvider><Login /></CasUserContextProvider>);
            });
        });

        it('should render a Login button', () => {
            expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument;
        });

        it('should visit the CAS login url on click', () => {
            fireEvent.click(screen.getByRole('button', { name: 'Login' }));
            expect(window.location.href)
                .toBe(`${casUrl}/login?service=${encodeURIComponent(`${baseUrl}/api/cas/login`)}`);
        });
        
    });

    describe('User is logged in', () => {

        beforeEach(async () => {
            fetchMock.mockResponseOnce(JSON.stringify(testUser));
            await act(() => {
                render(<CasUserContextProvider><Login /></CasUserContextProvider>);
            });
        });

        it('should render a Logout button', () => {
            expect(screen.getByRole('button', { name: `Logout (${testUser.uid})` })).toBeInTheDocument;
        });

        it('should visit the CAS logout url on click', () => {
            fireEvent.click(screen.getByRole('button', { name: `Logout (${testUser.uid})` }));
            expect(window.location.href)
                .toBe(`${casUrl}/logout?service=${encodeURIComponent(`${baseUrl}/api/cas/logout`)}`);
        });

    });

});
