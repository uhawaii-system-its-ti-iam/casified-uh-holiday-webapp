'use client';

import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const ColorSchemeToggle = () => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size={36}
            aria-label="Toggle color scheme"
        >   
            <IconSun className="mantine-hidden-light" stroke={1.5} data-testid="icon-sun" />
            <IconMoon className="mantine-hidden-dark" stroke={1.5} data-testid="icon-moon" />
        </ActionIcon>
    );
}
 
export default ColorSchemeToggle;
