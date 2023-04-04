import React from 'react';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
    return (
        <Link
            className="flex justify-between items-center space-x-2" href="/">
            <Image
                src="/holiday/seal.svg"
                width={50}
                height={50}
                alt="logo"
                role="img"/>
            <Label className={"uh-brand"}>
              UH Holidays
            </Label>
        </Link>
    );
}

export default Logo;
