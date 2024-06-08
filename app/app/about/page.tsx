import FaqAccordion from "@/components/accordions/faq_accordion/FaqAccordion";
import { Container, Col, Row } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <FaqAccordion />
                </Col>
            </Row>
        </Container>
    );
}

export default AboutPage;