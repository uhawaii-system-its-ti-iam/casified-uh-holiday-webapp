'use client';

import { useState } from 'react';
import { useReactTable } from '@tanstack/react-table';
import { Holiday } from '../holiday';
//import {IconChevronLeftPipe, IconChevronRightPipe, IconChevronLeft, IconChevronRight} from "@tabler/icons-react";

interface PaginationProps {
  tableInstance: ReturnType<typeof useReactTable<Holiday>>;
}

const Pagination = ({ tableInstance }: PaginationProps) => {
    const [activePage, setActivePage] = useState(0);
    const startPage = Math.max(0, activePage - 2);
    const endPage = Math.min(tableInstance.getPageCount() - 1, startPage + 4);

    const paginationButtons = [];

    const buttonStyle = {
        height: '40px', // Adjust the height as needed
        width: '50px',  // Adjust the width as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    for (let i = startPage; i <= endPage; i++) {
        paginationButtons.push(
            <button
                key={i}
                style={buttonStyle}
                className={`border-b  ring-light-dark-3-4 px-3.5 ${
                    activePage === i ? 'bg-green-200 hover:bg-green-200 text-black' : 'hover:bg-light-dark-3-4'
                }`}
                onClick={() => {
                    tableInstance.setPageIndex(i);
                    setActivePage(i);
                }}
            >
                {i + 1}
            </button>
        );
    }

    const navigateToPage = (page: number) => {
        tableInstance.setPageIndex(page);
        setActivePage(page);
    };

    return (
        <div className="flex justify-end mt-4">
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                    name={"First"}
                    style={buttonStyle}
                    className="pagination-button-first d-flex align-items-center"
                    disabled={!tableInstance.getCanPreviousPage()}
                    onClick={() => navigateToPage(0)}
                > {'|<'} </button>
                <button type="button"
                    name={"Prev"}
                    style={buttonStyle}
                    className="pagination-button-middle d-flex align-items-center"
                    disabled={!tableInstance.getCanPreviousPage()}
                    onClick={() => {
                        tableInstance.previousPage();
                        setActivePage(activePage - 1);
                    }}
                >
                    {'<'}
                </button>
                {paginationButtons}
                <button type="button"
                    name={"Next"}
                    style={buttonStyle}
                    className="pagination-button-middle d-flex align-items-center"
                    disabled={!tableInstance.getCanNextPage()}
                    onClick={() => {
                        tableInstance.nextPage();
                        setActivePage(activePage + 1);
                    }}
                >
                    {'>'}
                </button>
                <button type="button"
                    name="Last"
                    style={buttonStyle}
                    className="pagination-button-last d-flex align-items-center"
                    disabled={!tableInstance.getCanNextPage()}
                    onClick={() => {
                        const lastPage = tableInstance.getPageCount() - 1;
                        tableInstance.setPageIndex(lastPage);
                        setActivePage(lastPage);
                    }}
                >
                    {'>|'}</button>
            </div>
        </div>
    );
};

export default Pagination;