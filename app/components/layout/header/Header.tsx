import { getCurrentUser } from '@/access/AuthenticationService';
import { Container, Group } from '@mantine/core';
import LoginButton from './login_button/LoginButton';
import Role from '@/access/Role';
import ColorSchemeToggle from './color_scheme_toggle/ColorSchemeToggle';
import CampusDropdown from './campus_dropdown/CampusDropdownMenu';
import HamburgerMenu from './hamburger_menu/HamburgerMenu';
import UHBrand from './uh_brand/UHBrand';
import Link from 'next/link';

const Header = async () => {
    const currentUser = await getCurrentUser();

    return ( 
        <header className="border-b-[1px] text-light-dark-3-4">
            <Container py={5}>
                <Group justify="space-between">
                    <UHBrand />

                    <Group visibleFrom="sm" data-testid="header-links">
                        <Link className="link" href="/">Home</Link>
                        {currentUser.roles.includes(Role.UH) 
                            && <Link className="link" href="/contact">Contact</Link>}
                        <Link className="link" href="/about">About</Link>
                        <CampusDropdown />
                        <LoginButton currentUser={currentUser} />
                        <ColorSchemeToggle />
                    </Group>

                    <HamburgerMenu currentUser={currentUser} />
                </Group>
            </Container>
        </header>
    );
}
 
export default Header;
