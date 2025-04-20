import HolidaysTable from '@/app/(index)/_components/holidays_table/holidays-table';
import holidaysData from '../../../../public/data/holidaysData.json';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Pagination', () => {

    it('Renders first, last, previous, and next buttons.', () => {
        render(<HolidaysTable data={holidaysData}/>);

        const first = screen.getByRole('button', { name: '|<' });
        const prev = screen.getByRole('button', { name: '<' });
        const next = screen.getByRole('button', { name: '>' });
        const last = screen.getByRole('button', { name: '>|' });

        expect(first).toBeInTheDocument();
        expect(prev).toBeInTheDocument();
        expect(next).toBeInTheDocument();
        expect(last).toBeInTheDocument();
    });

    it('First page and last page buttons access the correct pages.', () => {
        render(<HolidaysTable data={holidaysData}/>);

        const first = screen.getByRole('button', { name: '|<' });
        const last = screen.getByRole('button', { name: '>|' });

        fireEvent.click(last);
        let firstPage = screen.queryAllByRole('button', { name: '1' });
        let lastPage = screen.queryAllByRole('button', { name: '18' });
        expect(firstPage.length).toBe(0);
        expect(lastPage.length).toBe(1);

        fireEvent.click(first);
        firstPage = screen.queryAllByRole('button', { name: '1' });
        lastPage = screen.queryAllByRole('button', { name: '18' });
        expect(lastPage.length).toBe(0);
        expect(firstPage.length).toBe(1);
    });

    it('Updates the pagination bar as the current page increases and decreases.', () => {
        render(<HolidaysTable data={holidaysData}/>);

        const prev = screen.getByRole('button', { name: '<' });
        const next = screen.getByRole('button', { name: '>' });
        let firstPage = screen.queryAllByRole('button', { name: '1' });
        expect(firstPage.length).toBe(1);
        for (let i = 0; i < 3; i++){
            fireEvent.click(next);
        }
        firstPage = screen.queryAllByRole('button', { name: '1' });
        expect(firstPage.length).toBe(0);

        fireEvent.click(prev);
        firstPage = screen.queryAllByRole('button', { name: '1' });
        expect(firstPage.length).toBe(1);
    });
});
