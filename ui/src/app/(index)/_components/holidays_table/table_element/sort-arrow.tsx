'use client';

import { ArrowUpNarrowWide, ArrowDownWideNarrow, ArrowUpDown } from 'lucide-react';

interface sortArrowProps {
    sortDirection : string | boolean
}

const SortArrow = ({sortDirection}: sortArrowProps) => (
    <a>
        {sortDirection === 'asc' ? (
            <ArrowUpNarrowWide />
        ) : sortDirection === 'desc' ? (
            <ArrowDownWideNarrow />
        ) : (
            <ArrowUpDown />
        )}
    </a>
)

export default SortArrow;
