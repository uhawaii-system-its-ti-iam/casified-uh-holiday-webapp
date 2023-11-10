import { render, screen } from '@testing-library/react';
import ContactTable from '@/components/tables/contact_table/ContactTable';

describe('ContactTable', () => {
    beforeEach(() => {
        render(<ContactTable />);
    });

    it('should render the Contact Table', () => {
        expect(screen.getByLabelText('Contact Table')).toBeInTheDocument;
        expect(screen.getByRole('table')).toBeInTheDocument;
        expect(screen.getByRole('rowgroup')).toBeInTheDocument;
        expect(screen.getAllByRole('row')).toBeInTheDocument;
        expect(screen.getAllByRole('cell')).toBeInTheDocument;
    });
});
