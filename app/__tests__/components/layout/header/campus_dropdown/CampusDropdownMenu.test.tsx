import { screen, fireEvent } from '@testing-library/react';
import CampusDropdownMenu from '@/components/layout/header/campus_dropdown/CampusDropdownMenu';
import { renderWithProviders } from 'jest.setup';

describe('CampusDropdownMenu', () => {
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

    it('should render the dropdown button with the menu closed on load', () => {
        renderWithProviders(<CampusDropdownMenu />);

        expect(screen.getByRole('button', { name: 'Campuses' })).toBeInTheDocument();
        expect(screen.queryByRole('menu', { name: 'Campuses' })).not.toBeInTheDocument();
        for (const campus in campuses) {
            expect(screen.queryByRole('menuitem', { name: campus })).not.toBeInTheDocument();
        }
    });

    it('should open and close dropdown menu on click', () => {
        renderWithProviders(<CampusDropdownMenu />);

        // Open dropdown menu
        fireEvent.click(screen.getByRole('button', { name: 'Campuses' }));
        expect(screen.getByRole('menu', { name: 'Campuses' })).toBeInTheDocument();
        for (const campus in campuses) {
            expect(screen.getByRole('menuitem', { name: campus })).toBeInTheDocument();
        }

        // Close dropdown menu
        fireEvent.click(screen.getByRole('menu', { name: 'Campuses' }));
        expect(screen.getByRole('menu', { name: 'Campuses' })).not.toBeVisible();
        for (const campus in campuses) {
            expect(screen.getByRole('menuitem', { name: campus })).not.toBeVisible();
        }
    });

    it('should open the campus website in a new tab when clicked', () => {
        renderWithProviders(<CampusDropdownMenu />);
        
        fireEvent.click(screen.getByRole('button', { name: 'Campuses' }));
        for (const [key, value] of Object.entries(campuses)) {
            expect(screen.getByRole('menuitem', { name: key })).toHaveAttribute('href', value);
            expect(screen.getByRole('menuitem', { name: key })).toHaveAttribute('target');
        }
    });
});
