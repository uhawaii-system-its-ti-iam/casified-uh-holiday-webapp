'use client';

import {IconSortAscending, IconSortDescending, IconArrowsSort} from "@tabler/icons-react";

interface sortArrowProps {
    sortDirection : string | boolean
}

const SortArrow = ({sortDirection}: sortArrowProps) => (
    <a>
        {sortDirection === 'asc' ? (
            <IconSortAscending />
        ) : sortDirection === 'desc' ? (
            <IconSortDescending />
        ) : (
            <IconArrowsSort />
        )}
    </a>
)

export default SortArrow;
