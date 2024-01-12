'use client';

import React from 'react';
import Link from 'next/link';
import { Burger, Divider, Drawer, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import UHBrand from '@/components/layout/header/uh_brand/UHBrand';
import User from '@/access/User';
import CampusDropdownCollapse from '@/components/layout/header/campus_dropdown/CampusDropdownCollapse';
import Login from '@/components/layout/header/login_button/LoginButton';
import ColorSchemeToggle from '@/components/layout/header/color_scheme_toggle/ColorSchemeToggle';
import Role from '@/access/Role';

const HamburgerMenu = ({ 
    currentUser 
} : {
    currentUser: User
}) => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return ( 
        <>
            <Burger onClick={toggleDrawer} hiddenFrom="sm" aria-label="Open the menu" />
            
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={<UHBrand />}
                hiddenFrom="sm"
            >
                <Divider />

                <Stack pt={15}>
                    <Link className="link" href="/" onClick={closeDrawer}>Home</Link>
                    {currentUser.roles.includes(Role.UH) 
                        && <Link className="link" href="/contact" onClick={closeDrawer}>Contact</Link>}
                    <Link className="link" href="/about" onClick={closeDrawer}>About</Link>
                    <CampusDropdownCollapse />
                    <Group grow preventGrowOverflow={false}>
                        <Login currentUser={currentUser} />
                        <ColorSchemeToggle />
                    </Group>  
                </Stack>
                
            </Drawer>
        </>
    );
}
 
export default HamburgerMenu;
