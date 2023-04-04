import HolidaysTable from '@/components/tables/holidays_table/HolidaysTable';
import holidaysData from '../../../../../public/data/holidaysData.json';
import { render, screen, fireEvent } from '@testing-library/react';
describe('Filter', () => {

    it('Renders with correct placeholder text.', () => {
        render(<HolidaysTable data={holidaysData}/>);

        const filter = screen.getByRole('textbox') as HTMLInputElement;
        expect(filter.placeholder).toBe('Search by Holiday, Day, Month, Year');
    });

    it('Input box is clickable.', () => {
        render(<HolidaysTable data={holidaysData}/>);

        const filter = screen.getByRole('textbox');
        const click = fireEvent.click(filter);
        expect(click).toBe(true);
    });

    it('Table sorts correctly with input text.', () => {
        render(<HolidaysTable data={holidaysData}/>);

        let discovDayRows = screen.queryAllByText('Discoverers\' Day');
        expect(discovDayRows.length).toBe(0);

        const filter = screen.getByRole('textbox');
        fireEvent.change(filter, { target: { value: 'Discoverer' } });
        discovDayRows = screen.queryAllByText('Discoverers\' Day');
        expect(discovDayRows.length).toBeGreaterThan(0);
    });
});
