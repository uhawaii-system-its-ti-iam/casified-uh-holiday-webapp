import FaqAccordion from '@/components/accordions/faq_accordion/FaqAccordion';
import { Container, Stack } from '@mantine/core';

const AboutPage = () => {
    return ( 
        <Container>
            <Stack>
                <h1>Frequently Asked Questions</h1>
                <FaqAccordion />
            </Stack> 
        </Container>
    );
}

export default AboutPage;
