import { render, screen, fireEvent } from '@testing-library/react';
import HolidaysTableHeaders from '../../../../../components/tables/holidays_table/table_element/HolidaysTableHeaders';

describe('HolidaysTableHeaders', () => {
    beforeEach(() => {
        render(<table><HolidaysTableHeaders handleSorting={jest.fn()} /></table>);
    });

    it('should render the three column headers and SortArrow with ArrowDown icon in the Observed header onload', () => {
        expect(screen.getByRole('columnheader', { name: 'Holiday' })).toBeInTheDocument;
        expect(screen.getByRole('columnheader', { name: 'Observed ArrowDown' })).toBeInTheDocument;
        expect(screen.getByRole('columnheader', { name: 'Official' })).toBeInTheDocument;
    });

    it('should render the SortArrow with the correct Arrow icon when the Holiday header is clicked on', () => {
        fireEvent.click(screen.getByRole('columnheader', { name: 'Holiday' }));
        expect(screen.getByRole('columnheader', { name: 'Holiday ArrowUp' })).toBeInTheDocument;

        fireEvent.click(screen.getByRole('columnheader', { name: 'Holiday ArrowUp' }));
        expect(screen.getByRole('columnheader', { name: 'Holiday ArrowDown' })).toBeInTheDocument;
    });

    it('should render the SortArrow with the correct Arrow icon when the Observed header is clicked on', () => {
        fireEvent.click(screen.getByRole('columnheader', { name: 'Observed ArrowDown' }));
        expect(screen.getByRole('columnheader', { name: 'Observed ArrowUp' })).toBeInTheDocument;

        fireEvent.click(screen.getByRole('columnheader', { name: 'Observed ArrowUp' }));
        expect(screen.getByRole('columnheader', { name: 'Observed ArrowDown' })).toBeInTheDocument;
    });

    it('should render the SortArrow with the correct Arrow icon when the Official header is clicked on', () => {
        fireEvent.click(screen.getByRole('columnheader', { name: 'Official' }));
        expect(screen.getByRole('columnheader', { name: 'Official ArrowUp' })).toBeInTheDocument;

        fireEvent.click(screen.getByRole('columnheader', { name: 'Official ArrowUp' }));
        expect(screen.getByRole('columnheader', { name: 'Official ArrowDown' })).toBeInTheDocument;
    });

    it('should render the SortArrow with the correct Arrow icon with the corresponding header that is clicked on', () => {
        fireEvent.click(screen.getByRole('columnheader', { name: 'Holiday' }));
        expect(screen.getByRole('columnheader', { name: 'Holiday ArrowUp' })).toBeInTheDocument;

        fireEvent.click(screen.getByRole('columnheader', { name: 'Official' }));
        expect(screen.getByRole('columnheader', { name: 'Official ArrowDown' })).toBeInTheDocument;

        fireEvent.click(screen.getByRole('columnheader', { name: 'Observed' }));
        expect(screen.getByRole('columnheader', { name: 'Observed ArrowUp' })).toBeInTheDocument;

        fireEvent.click(screen.getByRole('columnheader', { name: 'Observed ArrowUp' }));
        expect(screen.getByRole('columnheader', { name: 'Observed ArrowDown' })).toBeInTheDocument;
    });
});
