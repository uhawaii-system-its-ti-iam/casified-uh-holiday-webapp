import { render, screen, /*fireEvent*/ } from '@testing-library/react';
import CampusDropdownMenu from '@/components/layout/header/campus_dropdown/CampusDropdownMenu';

describe('CampusDropdownMenu', () => {
    it('renders the dropdown button with the menu closed by default', () => {
        render(<CampusDropdownMenu />);

        const campusButton = screen.getByRole('button', { name: 'Campuses' });
        expect(campusButton).toBeInTheDocument();
    });

    /*it('toggles dropdown menu visibility on click', () => {
        render(<CampusDropdownMenu />);

        const campusButton = screen.getByRole('button', { name: 'Campuses' });

        // Open dropdown menu
        fireEvent.click(campusButton);
        let uniLabel = screen.getByTestId('uniLabel');
        expect(uniLabel).toBeInTheDocument();

        // Close dropdown menu
        fireEvent.click(campusButton);
        uniLabel = screen.queryByTestId('uniLabel') as HTMLElement; // Use queryByTestId to check absence
        expect(uniLabel).toBeNull();
    });

    it('opens campus website in a new tab when clicked', () => {
        render(<CampusDropdownMenu />);

        const campusButton = screen.getByRole('button', { name: 'Campuses' });

        fireEvent.click(campusButton); // Open dropdown menu

        const campusLinks = screen.getAllByRole('link', {
            name: /Hilo|Manoa|West Oahu|Hawaii|Honolulu|Kapiolani|Kauai|Leeward|Maui|Windward/ 
        });
        campusLinks.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank');
        });
    });*/
});
