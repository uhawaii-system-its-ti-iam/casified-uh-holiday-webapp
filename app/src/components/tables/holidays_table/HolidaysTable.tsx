import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
} from '@tanstack/react-table';
import useAxiosPromise from '../../../hooks/useAxiosPromise';
import { useMemo, useState, useEffect } from 'react';
import HolidaysTableHeaders from '../../../components/tables/holidays_table/table_element/HolidaysTableHeaders';
import { Holiday } from './Holiday';
import SortArrow from '../../../components/tables/holidays_table/table_element/SortArrow';
import PaginationBar from '../../../components/tables/holidays_table/table_element/Pagination';
import FilterBar from '../../../components/tables/holidays_table/table_element/Filter';
import '../../../styles/Home.module.css';

interface HolidaysTableProps {
    data: Holiday[];
}


const HolidaysTable = ({ data }: HolidaysTableProps) => {
    const [filtering, setFiltering] = useState('');
    const [firstColumnSorting, setFirstColumnSorting] = useState<'asc' | 'desc'>('asc');
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
        <div className="container">
            {data === null ? (
                <div className="text-center">
                    <p className="font-weight-bold fs-2">No Data Available</p>
                </div>
            ) : (
                <>
                    <div className="d-flex justify-content-end">
                        <FilterBar filtering={filtering} setFiltering={setFiltering} />
                    </div>
                    <hr className="m-0 border-0 border-top-1 border-secondary" />
                    <table className="table table-striped">
                        <thead>
                            {tableInstance.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            className="font-weight-bold fs-11"
                                            style={{ minWidth: '400px' }}
                                        >
                                            {header.isPlaceholder ? null : 
                                                flexRender(header.column.columnDef.header, header.getContext())}
                                            <SortArrow sortDirection={header.column.getIsSorted()} />
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {tableInstance.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} style={{ minWidth: '400px' }}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <PaginationBar tableInstance={tableInstance} />
                </>
            )}
        </div>
    );
}

export default HolidaysTable;
