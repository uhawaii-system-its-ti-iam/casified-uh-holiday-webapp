import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import axios from '../../hooks/axiosConfig';

const Home = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOLIDAYS_API_BASE_URL}/holidays`);

    return (
        <div className="container">
            <HolidaysTable data={data ? data.data : null} />
        </div>
    );
}

export default Home;
