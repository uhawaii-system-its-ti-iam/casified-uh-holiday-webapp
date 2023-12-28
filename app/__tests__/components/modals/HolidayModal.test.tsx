import { displayHolidayModal } from '@/components/modals/holiday_modal/HolidayModal';
import { renderWithProviders } from 'jest.setup';
import { modals } from '@mantine/modals';
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';

describe('HolidayModal', () => {

    const holiday = {
        description: 'Veterans\' Day',
        observedDateFull: 'November 10, 2023, Friday',
        officialDateFull: 'November 11, 2023, Saturday'
    }

    it('should display and close the HolidayModal', async () => {
        renderWithProviders(<button onClick={() => displayHolidayModal(holiday)}>Open</button>);
        
        const openContextModalSpy = jest.spyOn(modals, 'openContextModal');

        fireEvent.click(screen.getByRole('button', { name: 'Open' }));

        expect(openContextModalSpy).toHaveBeenCalled();
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: holiday.description })).toBeInTheDocument();
        expect(screen.getByText(holiday.observedDateFull)).toBeInTheDocument();
        expect(screen.getByText(holiday.officialDateFull)).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Close'}));
        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: holiday.description })).not.toBeInTheDocument();
        expect(screen.queryByText(holiday.observedDateFull)).not.toBeInTheDocument();
        expect(screen.queryByText(holiday.officialDateFull)).not.toBeInTheDocument(); 
    });
    
});
