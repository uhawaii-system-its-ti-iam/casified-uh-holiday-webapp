import HamburgerMenu from '@/components/layout/header/hamburger_menu/HamburgerMenu';
import { renderWithProviders } from 'jest.setup';
import User, { anonymousUser } from '@/access/User';
import { fireEvent, screen } from '@testing-library/react';
import Role from '@/access/Role';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('HamburgerMenu', () => {

    describe('User is not logged in', () => {

        it('should render the HamburgerMenu with the drawer closed', () => {
            renderWithProviders(<HamburgerMenu currentUser={anonymousUser} />);

            expect(screen.getByRole('button', { name: 'Open the menu' })).toBeInTheDocument();
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });
    
        it('should open the drawer on click', () => {
            renderWithProviders(<HamburgerMenu currentUser={anonymousUser} />);

            fireEvent.click(screen.getByRole('button', { name: 'Open the menu' }));
            expect(screen.getByRole('dialog')).toBeInTheDocument();
        });
    
        it('should contain the contents of the header', () => {
            renderWithProviders(<HamburgerMenu currentUser={anonymousUser} />);

            fireEvent.click(screen.getByRole('button', { name: 'Open the menu' }));
            expect(screen.getByRole('link', { name: 'logo UH Holidays' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
            expect(screen.queryByRole('link', { name: 'Contact' })).not.toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Toggle color scheme' })).toBeInTheDocument();
        });

    });

    describe('User is logged in', () => {

        beforeAll(() => {
            testUser.roles.push(Role.UH);
        });

        it('should contain the contents of the header', () => {
            renderWithProviders(<HamburgerMenu currentUser={testUser} />)
            
            fireEvent.click(screen.getByRole('button', { name: 'Open the menu' }));
            expect(screen.getByRole('link', { name: 'logo UH Holidays' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: `Logout (${testUser.uid})` })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Toggle color scheme' })).toBeInTheDocument();
        });

    });
    
});
