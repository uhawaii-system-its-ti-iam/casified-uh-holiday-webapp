import { screen, fireEvent } from '@testing-library/react';
import FaqAccordion from '@/components/accordions/faq_accordion/FaqAccordion';
import { renderWithProviders } from 'jest.setup';

describe('FaqAccordion', () => {

    it('should render the FaqAccordion', () => {
        renderWithProviders(<FaqAccordion />);

        expect(screen.getByTestId('faq-accordion')).toBeInTheDocument();
        expect(screen.getAllByRole('button').length).toEqual(6);
        expect(screen.getByText('General Questions')).toBeInTheDocument();
        expect(screen.getByText('Resources')).toBeInTheDocument();
        expect(screen.getByText('Technologies')).toBeInTheDocument();
    });

    it('should open and close when an accordion item is clicked', () => {
        renderWithProviders(<FaqAccordion />);

        for (const accordionItem of screen.getAllByRole('button')) {
            expect(accordionItem).toHaveAttribute('aria-expanded', 'false');
            fireEvent.click(accordionItem);
            expect(accordionItem).toHaveAttribute('aria-expanded', 'true');
            fireEvent.click(accordionItem);
            expect(accordionItem).toHaveAttribute('aria-expanded', 'false');
        }
    });
});
