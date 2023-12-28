import { Accordion, AccordionControl, AccordionItem, AccordionPanel } from '@mantine/core';

const ContactAccordion = () => {
    const email = 'duckart@hawaii.edu';
    const itsOffice = 'www.hawaii.edu/its';

    return (
        <Accordion data-testid="contact-accordion">
            <AccordionItem value="For General Help/How-To Questions">
                <AccordionControl>For General Help/How-To Questions</AccordionControl>
                <AccordionPanel>
                    Send email: <a href={`mailto:${email}`}>{email}</a>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="Reporting Technical Issues/Problems">
                <AccordionControl>Reporting Technical Issues/Problems</AccordionControl>
                <AccordionPanel>
                    Send email: <a href={`mailto:${email}`}>{email}</a>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="Information Technology Services">
                <AccordionControl>Information Technology Services</AccordionControl>
                <AccordionPanel>
                    See: <a href={`http://${itsOffice}`} target="_its_office">{itsOffice}</a>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
 
export default ContactAccordion;
