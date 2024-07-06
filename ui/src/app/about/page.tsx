import FaqAccordion from "@/app/about/_components/faq-accordion";
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