'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import CampusDropdown from '@/components/layout/menubar/campus_dropdown/campus-dropdown';
import Login from './login/login';
import Role from '@/access/role';
import { getCurrentUser } from '@/access/authentication-service';

const Menubar = async () => {
    const currentUser = await getCurrentUser();

    return ( 
        <Navbar fixed="top" expand="md">
            <Container>
                <Link href="/" passHref>
                    <NavbarBrand>
                        <Image src="/holiday/seal.svg" alt="" role="img" fill quality={100} />
                        <p className="uh-nav-app-name">hawaii.edu/holidays</p>
                    </NavbarBrand>
                </Link>
                <NavbarToggle />
                <NavbarCollapse>
                    <Nav className="ms-auto">
                        <Link href="/" passHref legacyBehavior><NavLink>Home</NavLink></Link>
                        {currentUser.roles.includes(Role.UH) 
                            && <Link href="/contact" passHref legacyBehavior><NavLink>Contact</NavLink></Link>}
                        <Link href="/about" passHref legacyBehavior><NavLink>About</NavLink></Link>
                        <CampusDropdown />
                        <Login currentUser={currentUser} />
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}
 
export default Menubar;
