import { act, render, screen, fireEvent, waitFor } from '@testing-library/react';
import Menubar from '@/components/layout/menubar/Menubar';
import { CasUserContextProvider } from '@/access/useCasUserContext';
import User, { AnonymousUser } from '@/access/User';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe ('Menubar', () => {

    beforeEach(async () => {
        await act(() => {
            render(
                <CasUserContextProvider>
                    <Menubar />
                </CasUserContextProvider>
            );
        });
    });

    describe('User is not logged in', () => {

        beforeAll(() => {
            fetchMock.mockResponse(JSON.stringify(AnonymousUser));
        });

        it('should render a navbar with a UH Logo, Home, About, Campuses dropdown, and Login button', () => {
            expect(screen.getByRole('navigation')).toBeInTheDocument;
            expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
            expect(screen.getByRole('link', { name: 'hawaii.edu/holidays' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/faq');
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument;
            expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument;
        });

    });

    describe('User is logged in', () => {

        beforeAll(() => {
            fetchMock.mockResponse(JSON.stringify(testUser));
        });

        it('should render a navbar with a UH Logo, Home, Contact, About, Campuses dropdown, and Login button', () => {
            expect(screen.getByRole('navigation')).toBeInTheDocument;
            expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
            expect(screen.getByRole('link', { name: 'hawaii.edu/holidays' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
            expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/faq');
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument;
            expect(screen.getByRole('button', { name: `Logout (${testUser.uid})` })).toBeInTheDocument;
        });

    });

    it('should collapse the navbar when the screen has a width <768px', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument;
        expect(screen.getByRole('navigation')).toHaveClass('navbar-expand-md');
    });

    it('should open a dropdown when clicking on the navbar toggle button', async () => {
        expect(screen.getByRole('button', { name: 'Toggle navigation' })).toBeInTheDocument;
        expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveClass('collapsed');

        fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }));
        await waitFor(() => {
            expect(screen.getByRole('button', { name: 'Toggle navigation' })).not.toHaveClass('collapsed');
        });
    });

});
