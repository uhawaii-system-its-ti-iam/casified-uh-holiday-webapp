import FaqTable from "@/components/tables/faq_table/FaqTable";
import { Container, Col, Row } from "react-bootstrap";

const Faq = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <h3>Frequently Asked Questions</h3>
                    <FaqTable />
                </Col>
            </Row>
        </Container>
    );
}
 
export default Faq;
