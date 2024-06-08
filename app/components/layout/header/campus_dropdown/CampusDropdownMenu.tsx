"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";
import {
    NavigationMenu, 
    NavigationMenuList, 
    navigationMenuTriggerStyle, 
    NavigationMenuLink
} from "@/components/ui/navigation-menu";

const CampusDropdownMenu = () => (
    <NavigationMenu>
        <NavigationMenuList>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Campuses
                    </NavigationMenuLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Universities</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <a href="https://www.hilo.hawaii.edu/" role="link">Hilo</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.manoa.hawaii.edu/" role="link">Manoa</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://westoahu.hawaii.edu/" role="link">West Oahu</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Community Colleges</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <a href="https://www.hawaii.hawaii.edu/" role="link">Hawaii</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.honolulu.hawaii.edu/" role="link">Honolulu</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.kapiolani.hawaii.edu/" role="link">Kapiolani</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.kauai.hawaii.edu/" role="link">Kauai</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.leeward.hawaii.edu/" role="link">Leeward</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.maui.hawaii.edu/" role="link">Maui</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.windward.hawaii.edu/" role="link">Windward</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </NavigationMenuList>
    </NavigationMenu>
);

export default CampusDropdownMenu;
