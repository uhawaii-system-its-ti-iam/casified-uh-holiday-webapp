import React, {useState} from "react";

interface paginationBarProps {
    tableInstance : any
}
const PaginationBar = ({tableInstance} : paginationBarProps) => {
    const [activePage, setActivePage] = useState(0);
    const startPage = Math.max(0, activePage - 2);
    const endPage = Math.min(tableInstance.getPageCount() - 1, startPage + 4);

    const paginationButtons = [];
    for (let i = startPage; i <= endPage; i++) {
        paginationButtons.push(
            <button
                key={i}
                className={`btn btn-outline-success ${activePage === i ? 'active' : ''}`}
                onClick={() => {
                    tableInstance.setPageIndex(i);
                    setActivePage(i); // Update the active page when a button is clicked
                }}
            >
                {i + 1}
            </button>
        );
    }
    return (
        <div className="d-flex justify-content-end">
            <div className="btn-group">
                <button className="btn btn-outline-success" onClick={() => {
                    tableInstance.setPageIndex(0);
                    setActivePage(0);
                }}>
                        &lt;&lt; First
                </button>
                <button
                    className="btn btn-outline-success"
                    disabled={!tableInstance.getCanPreviousPage()}
                    onClick={() =>
                    {
                        tableInstance.previousPage();
                        setActivePage(activePage - 1);
                    }}
                >
                        &lt; Prev
                </button>
                {paginationButtons.map((u) => u)}
                <button
                    className="btn btn-outline-success"
                    disabled={!tableInstance.getCanNextPage()}
                    onClick={() =>
                    {
                        tableInstance.nextPage();
                        setActivePage(activePage + 1);
                    }}
                >
                        Next &gt;
                </button>
                <button
                    className="btn btn-outline-success"
                    onClick={() => {
                        tableInstance.setPageIndex(tableInstance.getPageCount() - 1);
                        setActivePage(tableInstance.getPageCount() - 1);
                    }}
                >
                        Last &gt;&gt;
                </button>
            </div>
        </div>
    );
}

export default PaginationBar;