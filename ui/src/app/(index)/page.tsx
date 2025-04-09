import HolidaysTable from "./_components/holidays_table/holidays-table";
import axios from '@/hooks/axios-config';

const Home = async () => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/holidays');

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <HolidaysTable data={data ? data.data : null} />
                </div>
            </div>
        </div>
    );
}

export default Home;
