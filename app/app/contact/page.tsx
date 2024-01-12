import ContactAccordion from '@/components/accordions/contact_accordion/ContactAccordion';
import { Container, Stack } from '@mantine/core';

const ContactPage = () => {
    return ( 
        <Container>
            <Stack>
                <h1>Contact Us</h1>
                <ContactAccordion />
            </Stack>
        </Container>
    );
}

export default ContactPage;
