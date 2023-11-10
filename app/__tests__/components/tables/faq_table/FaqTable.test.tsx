import { render, screen } from '@testing-library/react';
import FaqTable from '@/components/tables/faq_table/FaqTable';

describe('FaqTable', () => {
    beforeEach(() => {
        render(<FaqTable />);
    });

    it('should render the FAQ Table', () => {
        expect(screen.getByLabelText('FAQ Table')).toBeInTheDocument;
        expect(screen.getByRole('table')).toBeInTheDocument;
        expect(screen.getByRole('rowgroup')).toBeInTheDocument;
        expect(screen.getAllByRole('row')).toBeInTheDocument;
        expect(screen.getAllByRole('cell')).toBeInTheDocument;
    });
});
