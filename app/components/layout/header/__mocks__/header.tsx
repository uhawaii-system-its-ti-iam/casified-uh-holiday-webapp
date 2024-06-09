import LoginButton from '@/components/layout/header/login_button/login-button';
import Role from '@/access/role';
import ColorSchemeToggle from '@/components/layout/header/color_scheme_toggle/color-scheme-toggle';
import CampusDropdownMenu from '@/components/layout/header/campus_dropdown/campus-dropdown-menu';
import UHBrand from '@/components/layout/header/uh_brand/uh-brand';
import Link from 'next/link';
import { anonymousUser } from '@/access/user';

/**
 * Not the actual Header component.
 * Mock header used as workaround for React Testing Library because it does not support rendering server components.
 */
const MockHeader = () => {
    const currentUser = anonymousUser;

    return (
        <header className="border-b-[1px] text-light-dark-3-4">
            <div className="container py-5">
                <div className="flex justify-between items-center">
                    <UHBrand />

                    <div className="hidden sm:flex space-x-1" data-testid="header-links">
                        <Link className="link" href="/">Home</Link>
                        {currentUser.roles.includes(Role.UH)
                            && <Link className="link" href="/contact">Contact</Link>}
                        <Link className="link" href="/about">About</Link>
                        <CampusDropdownMenu />
                        <LoginButton currentUser={currentUser} />
                        <ColorSchemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}


export default MockHeader;
