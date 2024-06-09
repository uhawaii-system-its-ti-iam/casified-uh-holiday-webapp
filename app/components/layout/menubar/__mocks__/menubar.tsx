import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import CampusDropdown from '@/components/layout/menubar/campus_dropdown/campus-dropdown';
import Login from '../login/login';
import { anonymousUser } from '@/access/user';

const Menubar = () => ( 
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
                    <Link href="/about" passHref legacyBehavior><NavLink>About</NavLink></Link>
                    <CampusDropdown />
                    <Login currentUser={anonymousUser} />
                </Nav>
            </NavbarCollapse>
        </Container>
    </Navbar>
);

export default Menubar;
