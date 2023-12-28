'use client';

import React from 'react';
import { Anchor, Box, Center, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const CampusDropdownMenu = () => ( 
    <Menu width={150}>
        <Menu.Target>
            <Box className="link">
                <UnstyledButton>
                    <Center>
                        <span className="mr-[5px] text-sm leading-none font-medium">Campuses</span>
                        <IconChevronDown size="0.9rem" stroke={1.5} />
                    </Center>
                </UnstyledButton>
            </Box>
        </Menu.Target>

        <Menu.Dropdown mt={7}>
            <Menu.Label>Universities</Menu.Label>
            <Menu.Item component={Anchor} href="https://hilo.hawaii.edu/" target="_uhhi" 
                underline="never" role="link">
                Hilo
            </Menu.Item>
            <Menu.Item component={Anchor} href="https://manoa.hawaii.edu/" target="_uhma" 
                underline="never" role="link">
                Manoa
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://westoahu.hawaii.edu/" target="_uhwo" 
                underline="never" role="link">
                West Oahu
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Community Colleges</Menu.Label>
            <Menu.Item component={Anchor} href="https://hawaii.hawaii.edu/" target="_uhcchi" 
                underline="never" role="link">
                Hawaii
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://honolulu.hawaii.edu/" target="_uhccho" 
                underline="never" role="link">
                Honolulu
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://kapiolani.hawaii.edu/" target="_uhccka"
                underline="never" role="link">
                Kapiolani
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://kauai.hawaii.edu/" target="_uhccku" 
                underline="never" role="link">
                Kauai
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://www.leeward.hawaii.edu/" target="_uhccle" 
                underline="never" role="link">
                Leeward
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://maui.hawaii.edu/" target="_uhccmu" 
                underline="never" role="link">
                Maui
            </Menu.Item>
            <Menu.Item component={Anchor} href="http://windward.hawaii.edu/" target="_uhccwi" 
                underline="never" role="link">
                Windward
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
);

export default CampusDropdownMenu;
