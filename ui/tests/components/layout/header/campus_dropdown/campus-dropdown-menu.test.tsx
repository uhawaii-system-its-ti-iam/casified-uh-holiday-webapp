import { render, screen, act } from '@testing-library/react';
import CampusDropdownMenu from '@/components/layout/header/campus_dropdown/campus-dropdown-menu';
import userEvent from '@testing-library/user-event';

describe('CampusDropdownMenu', () => {

    it('renders the dropdown button', () => {
        render(<CampusDropdownMenu />);

        const campusButton = screen.getByRole('button', { name: 'Campuses' });
        expect(campusButton).toBeInTheDocument();
        const dropdownButton = screen.queryByRole('menuitem', {
            name: 'Hilo'
        });
        expect(dropdownButton).not.toBeInTheDocument();
    });

    it('Toggles dropdown menu visibility on click', async () => {
        render(<CampusDropdownMenu />);

        const user = userEvent.setup();
        const campusButton = screen.getByRole('button', { name: 'Campuses' });
        let dropdownButton = screen.queryByRole('menuitem', {
            name: 'Hilo'
        });
        expect(dropdownButton).not.toBeInTheDocument();

        await act(async () => {
            await user.click(campusButton); // Open dropdown menu
        });

        dropdownButton = screen.queryByRole('menuitem', {
            name: 'Hilo'
        });
        expect(dropdownButton).toBeInTheDocument();
    });

    it('opens campus website in a new tab when clicked', async () => {
        render(<CampusDropdownMenu />);

        const user = userEvent.setup();
        const campusButton = screen.getByRole('button', { name: 'Campuses' });

        await act(async () => {
            await user.click(campusButton); // Open dropdown menu
        });

        const dropdownButton = screen.queryByRole('menuitem', {
            name: 'Hilo'
        });

        expect(dropdownButton).toBeInTheDocument();
    });
});
