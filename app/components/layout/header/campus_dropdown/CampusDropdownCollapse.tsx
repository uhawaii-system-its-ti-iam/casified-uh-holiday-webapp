import { Box, Center, Collapse, Divider, UnstyledButton, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

const CampusCollapse = () => {
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
