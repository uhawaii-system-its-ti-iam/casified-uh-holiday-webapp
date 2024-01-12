import { screen, fireEvent } from '@testing-library/react';
import CampusDropdownCollapse from '@/components/layout/header/campus_dropdown/CampusDropdownCollapse';
import { renderWithProviders } from 'jest.setup';

describe('CampusDropdownCollapse', () => {
    const campuses = {
        "Hilo": "https://hilo.hawaii.edu/",
        "Manoa": "https://manoa.hawaii.edu/",
        "West Oahu": "http://westoahu.hawaii.edu/",
        "Hawaii": "https://hawaii.hawaii.edu/",
        "Honolulu": "http://honolulu.hawaii.edu/",
        "Kapiolani": "http://kapiolani.hawaii.edu/",
        "Kauai": "http://kauai.hawaii.edu/",
        "Leeward": "http://www.leeward.hawaii.edu/",
        "Maui": "http://maui.hawaii.edu/",
        "Windward": "http://windward.hawaii.edu/"
    };

    it('should render the dropdown button with the collapse closed on load', () => {
        renderWithProviders(<CampusDropdownCollapse />);

        expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument();
        expect(screen.getByTestId('collapse')).toHaveAttribute('aria-hidden', 'true');
        for (const campus in campuses) {
            expect(screen.getByText(campus)).toBeInTheDocument();
        }
    });

    it('should open and close dropdown collapse on click', () => {
        renderWithProviders(<CampusDropdownCollapse />);

        // Open dropdown collapse
        fireEvent.click(screen.getByRole('button', { name: 'Campuses' }));
        expect(screen.getByTestId('collapse')).toHaveAttribute('aria-hidden', 'false');
        
        // Close dropdown collapse
        fireEvent.click(screen.getByRole('button', { name: 'Campuses' }));
        expect(screen.getByTestId('collapse')).toHaveAttribute('aria-hidden', 'true');
    });

    it('should open the campus website in a new tab when clicked', () => {
        renderWithProviders(<CampusDropdownCollapse />);
        
        fireEvent.click(screen.getByRole('button', { name: 'Campuses' }));

        for (const [campus, link] of Object.entries(campuses)) {
            expect(screen.getByText(campus)).toHaveAttribute('href', link);
            expect(screen.getByText(campus)).toHaveAttribute('target');
        }
    });
});
