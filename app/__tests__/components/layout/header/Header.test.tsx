import { screen } from '@testing-library/react';
import Header from '@/components/layout/header/Header';
import User, { anonymousUser } from '@/access/User';
import * as AuthenticationService from '@/access/AuthenticationService';
import Role from '@/access/Role';
import { renderWithProviders } from 'jest.setup';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

jest.mock('@/access/AuthenticationService');

describe ('Header', () => {

    describe('User is not logged in', () => {
        
        beforeAll(() => {
            jest.spyOn(AuthenticationService, 'getCurrentUser').mockResolvedValue(anonymousUser);
        });

        it('should render the header without the link to /contact', async () => {
            renderWithProviders(await Header());

            expect(screen.getByRole('banner')).toBeInTheDocument();
            expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
            expect(screen.getByRole('link', { name: 'logo UH Holidays' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
            expect(screen.queryByRole('link', { name: 'Contact' })).not.toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Toggle color scheme' })).toBeInTheDocument();
        });

        it('should collapse the header links when the screen width is too small', async () => {
            renderWithProviders(await Header());

            expect(screen.getByTestId('header-links')).toHaveClass('mantine-visible-from-sm');
            expect(screen.getByRole('button', { name: 'Open the menu' })).toHaveClass('mantine-hidden-from-sm');
        });

    });

    describe('User is logged in', () => {

        beforeAll(() => {
            testUser.roles.push(Role.UH);
            jest.spyOn(AuthenticationService, 'getCurrentUser').mockResolvedValue(testUser);
        });

        it('should render the header with the link to /contact', async () => {
            renderWithProviders(await Header());

            expect(screen.getByRole('banner')).toBeInTheDocument();
            expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
            expect(screen.getByRole('link', { name: 'logo UH Holidays' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
            expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: `Logout (${testUser.uid})` })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Toggle color scheme' })).toBeInTheDocument();
        });

        it('should collapse the header links when the screen width is too small', async () => {
            renderWithProviders(await Header());

            expect(screen.getByTestId('header-links')).toHaveClass('mantine-visible-from-sm');
            expect(screen.getByRole('button', { name: 'Open the menu' })).toHaveClass('mantine-hidden-from-sm');
        });

    });
    
});
