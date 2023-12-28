import React from 'react';
import { Group, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return ( 
        <Group 
            className="font-cinzel-decorative-bold font-medium no-underline text-light-dark-7-0" 
            component={Link} href="/">
            <Image 
                src="/holiday/seal.svg" 
                width={50}
                height={50}
                alt="logo" 
                role="img" />
            <Text>UH Holidays</Text>
        </Group>
    );
}
 
export default Logo;
