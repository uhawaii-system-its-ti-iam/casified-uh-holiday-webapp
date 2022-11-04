import type { NextPage } from 'next';
import HolidaysTable from '../components/tables/holidays_table/HolidaysTable';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<HolidaysTable />
	)
}

export default Home
