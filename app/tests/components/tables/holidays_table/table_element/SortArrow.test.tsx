import { render, screen } from '@testing-library/react';
import SortArrow from '../../../../../components/tables/holidays_table/table_element/SortArrow';

describe('SortArrow', () => {
    it('should render SortArrow component with ArrowUp icon', () => {
        render(<SortArrow column='description' orderByField='description' reverseSort={true} />);
        expect(screen.getByTitle('ArrowUp')).toBeInTheDocument();
    });

    it('should render SortArrow component with ArrowDown icon', () => {
        render(<SortArrow column='description' orderByField='description' reverseSort={false} />);
        expect(screen.getByTitle('ArrowDown')).toBeInTheDocument();
    });

    it('should not render the SortArrow component with ArrowUp or ArrowDown icon', () => {
        render(<SortArrow column='observedDateFull.toEpochDay' orderByField='description' reverseSort={true} />);
        expect(screen.queryByTitle('ArrowUp')).not.toBeInTheDocument();
        expect(screen.queryByTitle('ArrowDown')).not.toBeInTheDocument();

        render(<SortArrow column='officialDateFull.toEpochDay' orderByField='description' reverseSort={false} />);
        expect(screen.queryByTitle('ArrowUp')).not.toBeInTheDocument();
        expect(screen.queryByTitle('ArrowDown')).not.toBeInTheDocument();
    });
});
