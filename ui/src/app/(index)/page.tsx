import type { NextPage } from 'next';
import { Container, Col, Row} from 'react-bootstrap';
import HolidaysTable from "./_components/holidays_table/holidays-table";
import axios from '@/hooks/axios-config';

const Home: NextPage = async () => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/holidays');

    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <HolidaysTable data={data ? data.data : null} />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
