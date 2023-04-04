import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/header/Header';
import User, { anonymousUser } from '@/access/User';
import * as AuthenticationService from '@/access/AuthenticationService';
import Role from '@/access/Role';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

jest.mock('@/access/AuthenticationService');

describe ('Header', () => {

    describe('User is not logged in', () => {
        
        beforeAll(() => {
            jest.spyOn(AuthenticationService, 'getCurrentUser').mockResolvedValue(anonymousUser);
        });

        it('should render the header without the link to /contact', async () => {
            render(await Header());

            expect(screen.getByRole('banner')).toBeInTheDocument();
            expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
            expect(screen.getByRole('link', { name: 'logo UH Holidays' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
            //expect(screen.queryByRole('link', { name: 'Contact' })).not.toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Toggle theme' })).toBeInTheDocument();
        });

    });

    describe('User is logged in', () => {

        beforeAll(() => {
            testUser.roles.push(Role.UH);
            jest.spyOn(AuthenticationService, 'getCurrentUser').mockResolvedValue(testUser);
        });

        it('should render the header with the link to /contact', async () => {
            render(await Header());

            expect(screen.getByRole('banner')).toBeInTheDocument();
            expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
            expect(screen.getByRole('link', { name: 'logo UH Holidays' })).toHaveAttribute('href', '/');
            expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
            //expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
            expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
            expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: `Logout (${testUser.uid})` })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Toggle theme' })).toBeInTheDocument();
        });

    });
    
});
