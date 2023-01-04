import ContactTable from "@/components/tables/contact_table/ContactTable";
import { Container, Col, Row } from "react-bootstrap";

const Contact = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <h3>Contact Us</h3>
                    <ContactTable />
                </Col>
            </Row>
        </Container>
    );
}
 
export default Contact;
