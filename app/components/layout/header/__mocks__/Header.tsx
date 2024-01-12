import { Container, Group } from '@mantine/core';
import LoginButton from '@/components/layout/header/login_button/LoginButton';
import Role from '@/access/Role';
import ColorSchemeToggle from '@/components/layout/header/color_scheme_toggle/ColorSchemeToggle';
import CampusDropdownMenu from '@/components/layout/header/campus_dropdown/CampusDropdownMenu';
import HamburgerMenu from '@/components/layout/header/hamburger_menu/HamburgerMenu';
import UHBrand from '@/components/layout/header/uh_brand/UHBrand';
import Link from 'next/link';
import { anonymousUser } from '@/access/User';

/**
 * Not the actual Header component.
 * Mock header used as workaround for React Testing Library because it does not support rendering server components.
 */
const MockHeader = () => {
    const currentUser = anonymousUser;

    return (
        <header className="border-b-[1px] text-light-dark-3-4">
            <Container py={5}>
                <Group justify="space-between">
                    <UHBrand />

                    <Group visibleFrom="sm">
                        <Link className="link" href="/">Home</Link>
                        {currentUser.roles.includes(Role.UH) 
                            && <Link className="link" href="/contact">Contact</Link>}
                        <Link className="link" href="/about">About</Link>
                        <CampusDropdownMenu />
                        <LoginButton currentUser={currentUser} />
                        <ColorSchemeToggle />
                    </Group>

                    <HamburgerMenu currentUser={currentUser} />
                </Group>
            </Container>
        </header>
    );
}

 
export default MockHeader;
