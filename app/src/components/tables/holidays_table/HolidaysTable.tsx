import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
} from "@tanstack/react-table";
import useAxiosPromise from "../../../hooks/useAxiosPromise";
import React, { useMemo, useState, useEffect } from "react";
import HolidaysTableHeaders from "../../../components/tables/holidays_table/table_element/HolidaysTableHeaders";
import { Holiday } from "./Holiday";
import SortArrow from "../../../components/tables/holidays_table/table_element/SortArrow";
import PaginationBar from "../../../components/tables/holidays_table/table_element/PaginationBar";
import FilterBar from "../../../components/tables/holidays_table/table_element/FilterBar";
interface HolidaysTableProps {
    data: Holiday[];
}


const HolidaysTable = ({ data }: HolidaysTableProps) => {
    const [filtering, setFiltering] = useState<string>("");
    const [firstColumnSorting, setFirstColumnSorting] = useState<'asc' | 'desc'>('asc');
    const [sorting, setSorting] = useState([{ id: 'description', desc: firstColumnSorting === 'desc' }]);
    const columns = HolidaysTableHeaders;

    const tableInstance = useReactTable({
        columns,
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
        <div>
            {data === null ? (
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", fontSize: "2em" }}>No Data Available</p>
                </div>
            ) : (
                <>
                    <div className="d-flex justify-content-end">
                        <FilterBar filtering={filtering} setFiltering={setFiltering}/>
                    </div>
                    <hr style={{ margin: "0", border: "none", borderTop: "1px solid #ccc" }} />
                    <table className="table table-striped">
                        <thead>
                            {tableInstance.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} onClick={header.column.getToggleSortingHandler()}
                                            className="fw-bold fs-11" style={{ minWidth: '400px' }}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header,
                                                header.getContext())}
                                            <SortArrow sortDirection={header.column.getIsSorted()}/>
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
                    <PaginationBar tableInstance={tableInstance}/>
                </>
            )}
        </div>
    );
    /*return (
        <div style={{ textAlign: "center" }}>
            {data === null ? (
                <p style={{ fontWeight: "bold" }}>Data is null</p>
            ) : (
                <>
                    <div className="d-flex justify-content-end">
                        <FilterBar filtering={filtering} setFiltering={setFiltering}/>
                    </div>
                    <hr style={{ margin: "0", border: "none", borderTop: "1px solid #ccc" }} />
                    <table className="table table-striped">
                        <thead>
                            {tableInstance.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} onClick={header.column.getToggleSortingHandler()}
                                            className="fw-bold fs-11" style={{ minWidth: '400px' }}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header,
                                                header.getContext())}
                                            <SortArrow sortDirection={header.column.getIsSorted()}/>
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
                    <PaginationBar tableInstance={tableInstance}/>
                </>
            )}
        </div>
    );*/
}

export default HolidaysTable;