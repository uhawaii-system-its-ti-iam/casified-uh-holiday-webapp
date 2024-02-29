'use client';

import {IconSortAscending, IconSortDescending, IconArrowsSort} from "@tabler/icons-react";

interface sortArrowProps {
    sortDirection : string | boolean
}

const SortArrow = ({sortDirection}: sortArrowProps) => (
    <>
        {sortDirection === 'asc' ? (
            <IconSortAscending />
        ) : sortDirection === 'desc' ? (
            <IconSortDescending />
        ) : (
            <IconArrowsSort />
        )}
    </>
)

export default SortArrow;
