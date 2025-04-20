
import { getCurrentUser } from '@/access/authentication';
import Role from '@/access/role';
import LoginButton from './login_button/login-button';
import ColorSchemeToggle from './color_scheme_toggle/color-scheme-toggle';
import UHBrand from './uh_brand/uh-brand';
import Menu from "@/components/layout/header/header_menu/header-menu";
import AuthMenuZ from "@/components/layout/header/header_menu/header-menu-authz";

const Header = async () => {
    const currentUser = await getCurrentUser();
    return (
        <header className="border-b border-light-dark-3-4 text-light-dark-3-4">
            <div className="container py-5">
                <div className="flex justify-between items-center">
                    <div className={"flex-shrink-0"}>
                        <UHBrand/>
                    </div>
                    <div className="flex items-center justify-end space-x-3">
                        <div className="hidden sm:flex space-x-3" data-testid="header-links">
                            <Menu/>
                            {currentUser.roles.includes(Role.UH) && (
                                <AuthMenuZ/>
                            )}
                        </div>
                        <div className={"flex items-center space-x-3"}>
                            <LoginButton currentUser={currentUser}/>
                            <ColorSchemeToggle/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
