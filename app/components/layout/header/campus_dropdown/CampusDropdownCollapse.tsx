import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from "@/components/ui/separator"
import { Label } from '@/components/ui/label';
import {CaretSortIcon} from '@radix-ui/react-icons';
import React from 'react';

const CampusCollapse = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <Button variant="ghost">Campuses</Button>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <CaretSortIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                {/*<Text c="dimmed" mb={6} fw={500} size="sm">Universities</Text>*/}
                <Label>Universities</Label>
                <a className="link py-3" href="https://hilo.hawaii.edu/" target="_uhhi" role="link">Hilo</a>
                <a className="link py-3" href="https://manoa.hawaii.edu/" target="_uhma" role="link">Manoa</a>
                <a className="link py-3" href="http://westoahu.hawaii.edu/" target="_uhwo" role="link">West Oahu</a>

                <Separator className="my-10" />

                {/*<Text c="dimmed" mb={6} fw={500} size="sm">Community Colleges</Text>*/}
                <Label>Community Colleges</Label>
                <a className="link py-3" href="https://hawaii.hawaii.edu/" target="_uhcchi" role="link">Hawaii</a>
                <a className="link py-3" href="http://honolulu.hawaii.edu/" target="_uhccho" role="link">Honolulu</a>
                <a className="link py-3" href="http://kapiolani.hawaii.edu/" target="_uhccka" role="link">Kapiolani</a>
                <a className="link py-3" href="http://kauai.hawaii.edu/" target="_uhccku" role="link">Kauai</a>
                <a className="link py-3" href="http://www.leeward.hawaii.edu/" target="_uhccle" role="link">Leeward</a>
                <a className="link py-3" href="http://maui.hawaii.edu/" target="_uhccmu" role="link">Maui</a>
                <a className="link py-3" href="http://windward.hawaii.edu/" target="_uhccwi" >Windward</a>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default CampusCollapse;

/*const CampusCollapse = () => {
    const [collapseOpened, { toggle: toggleCollapse }] = useDisclosure(false);

    return (
        <>
            <Box className="link">
                <UnstyledButton pr={rem("84%")} onClick={toggleCollapse}>
                    <Center>
                        <span className="mr-[5px] text-sm leading-none font-medium">Campuses</span>
                        <IconChevronDown size="0.9rem" stroke={1.5} />
                    </Center>
                </UnstyledButton>
            </Box>

            <Collapse in={collapseOpened} ml={12} data-testid="collapse">
                <Text c="dimmed" mb={6} fw={500} size="sm">Universities</Text>
                <a className="link py-3" href="https://hilo.hawaii.edu/" target="_uhhi" role="link">Hilo</a>
                <a className="link py-3" href="https://manoa.hawaii.edu/" target="_uhma" role="link">Manoa</a>
                <a className="link py-3" href="http://westoahu.hawaii.edu/" target="_uhwo" role="link">West Oahu</a>

                <Divider my={10} />

                <Text c="dimmed" mb={6} fw={500} size="sm">Community Colleges</Text>
                <a className="link py-3" href="https://hawaii.hawaii.edu/" target="_uhcchi" role="link">Hawaii</a>
                <a className="link py-3" href="http://honolulu.hawaii.edu/" target="_uhccho" role="link">Honolulu</a>
                <a className="link py-3" href="http://kapiolani.hawaii.edu/" target="_uhccka" role="link">Kapiolani</a>
                <a className="link py-3" href="http://kauai.hawaii.edu/" target="_uhccku" role="link">Kauai</a>
                <a className="link py-3" href="http://www.leeward.hawaii.edu/" target="_uhccle" role="link">Leeward</a>
                <a className="link py-3" href="http://maui.hawaii.edu/" target="_uhccmu" role="link">Maui</a>
                <a className="link py-3" href="http://windward.hawaii.edu/" target="_uhccwi" >Windward</a>
            </Collapse>
        </>

    );
}

export default CampusCollapse;
*/

/*
import { useState } from 'react';
import { Center, Transition } from '@tailwindui/react';
import { IconChevronDown } from '@tabler/icons-react';

const CampusCollapse = () => {
    const [collapseOpened, setCollapseOpened] = useState(false);

    const toggleCollapse = () => {
        setCollapseOpened(!collapseOpened);
    };

    return (
        <>
            <div className="link">
                <button className="text-sm font-medium leading-none focus:outline-none" onClick={toggleCollapse}>
                    <Center>
                        <span className="mr-1 text-sm leading-none font-medium">Campuses</span>
                        <IconChevronDown size="0.9rem" stroke={1.5} />
                    </Center>
                </button>
            </div>

            <Transition
                show={collapseOpened}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="ml-4" data-testid="collapse">
                    <p className="text-gray-500 mb-6 font-semibold text-sm">Universities</p>
                    <a className="link py-3 block" href="https://hilo.hawaii.edu/" target="_uhhi" role="link">Hilo</a>
                    <a className="link py-3 block" href="https://manoa.hawaii.edu/" target="_uhma" role="link">Manoa</a>
                    <a className="link py-3 block" href="http://westoahu.hawaii.edu/" target="_uhwo" role="link">
                      West Oahu
                    </a>

                    <hr className="my-10" />

                    <p className="text-gray-500 mb-6 font-semibold text-sm">Community Colleges</p>
                    <a className="link py-3 block" href="https://hawaii.hawaii.edu/" target="_uhcchi" role="link">
                      Hawaii
                    </a>
                    <a className="link py-3 block" href="http://honolulu.hawaii.edu/" target="_uhccho" role="link">
                      Honolulu
                    </a>
                    <a className="link py-3 block" href="http://kapiolani.hawaii.edu/" target="_uhccka" role="link">
                      Kapiolani
                    </a>
                    <a className="link py-3 block" href="http://kauai.hawaii.edu/" target="_uhccku" role="link">
                      Kauai
                    </a>
                    <a className="link py-3 block" href="http://www.leeward.hawaii.edu/" target="_uhccle" role="link">
                      Leeward
                    </a>
                    <a className="link py-3 block" href="http://maui.hawaii.edu/" target="_uhccmu" role="link">Maui</a>
                    <a className="link py-3 block" href="http://windward.hawaii.edu/" target="_uhccwi" role="link">
                      Windward
                    </a>
                </div>
            </Transition>
        </>
    );
}

export default CampusCollapse;
*/
