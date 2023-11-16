import type { NextPage } from 'next';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import useAxiosPromise from '../hooks/useAxiosPromise';

const Home: NextPage = () => {
    const { data, isLoading } = useAxiosPromise('holidays');

    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    {isLoading ? (
                        <Spinner animation="border" />
                    ) : (
                        <HolidaysTable data={data ? data.data : null} />
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
