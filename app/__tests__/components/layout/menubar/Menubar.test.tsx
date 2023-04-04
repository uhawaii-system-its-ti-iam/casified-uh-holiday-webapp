import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Menubar from '@/components/layout/menubar/Menubar';
import User, { anonymousUser } from '@/access/User';
import * as AuthenticationService from '@/access/AuthenticationService';
import Role from '@/access/Role';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

jest.mock('@/access/AuthenticationService');

describe ('Menubar', () => {

    beforeEach(async () => {
        // eslint-disable-next-line testing-library/no-render-in-lifecycle
        render(await Menubar());
    });

    describe('User is not logged in', () => {
        
        beforeAll(() => {
            jest.spyOn(AuthenticationService, 'getCurrentUser').mockResolvedValue(anonymousUser);
        });

        it('should render a navbar with a UH Logo, Home, About, Campuses dropdown, and Login button', () => {
            expect(screen.getByRole('navigation')).toBeInTheDocument;
            expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
            expect(screen.getByRole('link', { name: 'hawaii.edu/holidays' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
            expect(screen.queryByRole('link', { name: 'Contact' })).not.toBeInTheDocument;
            expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument;
            expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument;
        });

    });

    describe('User is logged in', () => {

        beforeAll(() => {
            testUser.roles.push(Role.UH);
            jest.spyOn(AuthenticationService, 'getCurrentUser').mockResolvedValue(testUser);
        });

        it('should render a navbar with a UH Logo, Home, Contact, About, Campuses dropdown, and Login button', () => {
            expect(screen.getByRole('navigation')).toBeInTheDocument;
            expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
            expect(screen.getByRole('link', { name: 'hawaii.edu/holidays' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
            expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument;
            expect(screen.getByRole('button', { name: `Logout (${testUser.uid})` })).toBeInTheDocument;
        });

    });

    describe('UX', () => {

        beforeAll(() => {
            jest.spyOn(AuthenticationService, 'getCurrentUser').mockResolvedValue(anonymousUser);
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

});
