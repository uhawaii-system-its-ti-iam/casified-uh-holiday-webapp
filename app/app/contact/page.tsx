import ContactAccordion from '@/components/accordions/contact_accordion/ContactAccordion';
import { Container, Col, Row } from 'react-bootstrap';

const ContactPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <ContactAccordion />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactPage;