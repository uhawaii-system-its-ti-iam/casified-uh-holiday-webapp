import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CampusDropdown from '@components/navbar/campus-dropdown/CampusDropdown';

describe('CampusDropdown', () => {
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

    beforeEach(() => {
        render(<CampusDropdown />);
    });

    it("should render the dropdown button without the menu open on load", () => {
        expect(screen.getByRole('button', { name: 'Campuses', expanded: false })).toBeInTheDocument;

        for (let campus in campuses) {
            expect(screen.queryByRole('link', { name: campus })).not.toBeInTheDocument;
        }
    });

    it("should open and close dropdown menu on click", async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Campuses' }));

        await waitFor(() => {
            expect(screen.getByRole('button', { name: 'Campuses', expanded: true })).toBeInTheDocument;

            for (let campus in campuses) {
                expect(screen.getByRole('link', { name: campus })).toBeInTheDocument;
            }
        });

        fireEvent.click(screen.getByRole('button', { name: 'Campuses' }));

        await waitFor(() => {
            expect(screen.getByRole('button', { name: 'Campuses', expanded: false })).toBeInTheDocument;

            for (let campus in campuses) {
                expect(screen.queryByRole('link', { name: campus })).not.toBeInTheDocument;
            }
        });
    });

    it("should open the campus website in a new tab when clicked", async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Campuses' }));

        await waitFor(() => {
            for (const [key, value] of Object.entries(campuses)) {
                expect(screen.getByRole('link', { name: key })).toHaveAttribute('href', value);
                expect(screen.getByRole('link', { name: key })).toHaveAttribute('target');
            }
        });
    });
});
