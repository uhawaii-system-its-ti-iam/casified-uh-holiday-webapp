'use client';

import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import HolidaysTableHeaders from '@/components/tables/holidays_table/table_element/HolidaysTableHeaders';
import { Holiday } from './Holiday';
import SortArrow from '@/components/tables/holidays_table/table_element/SortArrow';
import Pagination from '@/components/tables/holidays_table/table_element/Pagination';
import Filter from '@/components/tables/holidays_table/table_element/Filter';
import '../../../app/global.css';

interface HolidaysTableProps {
  data: Holiday[];
}

const HolidaysTable = ({ data }: HolidaysTableProps) => {

    const [filtering, setFiltering] = useState<string>("");
    const [sorting, setSorting] = useState([{ id: 'description', desc: false }]);

    const tableInstance = useReactTable({
        columns: HolidaysTableHeaders,
        data: data || [],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            globalFilter: filtering,
            sorting: sorting,
        },
        onGlobalFilterChange: setFiltering,
        onSortingChange: setSorting,
    });

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-end mb-4">
                <Filter filtering={filtering} setFiltering={setFiltering} />
            </div>
            <table className="groupings-table">
                <thead>
                    {tableInstance.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    scope="col"
                                    className="px-2 py-2.5"
                                    style={{ minWidth: '400px' }}
                                >
                                    <div className="header-content">
                                        {header.isPlaceholder ? null :
                                            flexRender(header.column.columnDef.header, header.getContext())}
                                        <SortArrow sortDirection={header.column.getIsSorted()} />
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tr className={`border-b border-off-white`}></tr>
                <tbody>
                    {tableInstance.getRowModel().rows.map((row, index: number) => (
                        <tr
                            className={`${
                                index % 2 === 0
                                    ? 'bg-top'
                                    : 'bg-transparent'
                            } border-b border-off-white`}
                            key={row.id}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="p-2">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
            <Pagination tableInstance={tableInstance} />
        </div>
    );
}

export default HolidaysTable;
