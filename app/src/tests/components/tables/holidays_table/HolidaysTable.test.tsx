import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HolidaysTable from "../../../../components/tables/holidays_table/HolidaysTable";
import { Holiday } from '../../../../components/tables/holidays_table/Holiday';
import holidaysData from '../../../../../public/data/holidaysData.json';

describe('HolidaysTable', () => {

    const data = holidaysData;

    it('renders the table with correct data and columns', () => {
        render(<HolidaysTable data={data}/>);
    });

    it('contains specific holiday data that is known to be in the document', () => {
        render(<HolidaysTable data={data}/>);
        const christmasElements = screen.getAllByText('Christmas');
        expect(christmasElements.length).toBeGreaterThanOrEqual(1);
    });

    it('correctly filters the table based on search input', () => {
        render(<HolidaysTable data={data} />);
        // Simulate typing into the search input
        const searchInput = screen.getByPlaceholderText('Search by Holiday, Day, Month, Year');
        fireEvent.change(searchInput, { target: { value: 'Christmas' } });

        // Add assertions to check if the table is correctly filtered
        const christmasRows = screen.queryAllByText('Christmas');
        expect(christmasRows.length).toBeGreaterThan(0);

        // Add assertions to check if other rows are hidden
        const thanksgivingRow = screen.queryByText('Thanksgiving');
        expect(thanksgivingRow).toBeNull();
    });

    it('correctly sorts the table when column header is clicked', () => {
        render(<HolidaysTable data={data} />);
        // Simulate clicking on a column header to trigger sorting
        const headerToSort = screen.getByText('HOLIDAY');
        const headerToSort2 = screen.getByText('OBSERVED');
        const headerToSort3 = screen.getByText('OFFICIAL');
        fireEvent.click(headerToSort);
        fireEvent.click(headerToSort2);
        fireEvent.click(headerToSort3);

        // Add assertions to check if the table is correctly sorted
        // For example, you can assert the order of specific rows based on sorting
    });
});
