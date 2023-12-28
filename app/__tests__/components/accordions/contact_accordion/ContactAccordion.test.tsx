import { screen, fireEvent } from '@testing-library/react';
import ContactAccordion from '@/components/accordions/contact_accordion/ContactAccordion';
import { renderWithProviders } from 'jest.setup';

describe('ContactAccordion', () => {

    it('should render the ContactAccordion', () => {
        renderWithProviders(<ContactAccordion />);

        expect(screen.getByTestId('contact-accordion')).toBeInTheDocument();
        expect(screen.getAllByRole('button').length).toEqual(3);
    });

    it('should open and close when an accordion item is clicked', () => {
        renderWithProviders(<ContactAccordion />);

        for (const accordionItem of screen.getAllByRole('button')) {
            expect(accordionItem).toHaveAttribute('aria-expanded', 'false');
            fireEvent.click(accordionItem);
            expect(accordionItem).toHaveAttribute('aria-expanded', 'true');
            fireEvent.click(accordionItem);
            expect(accordionItem).toHaveAttribute('aria-expanded', 'false');
        }
    });
});
