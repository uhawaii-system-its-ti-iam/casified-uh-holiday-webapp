import axios from 'axios';

//TODO: Change BASE_URL to include domain from property file

const BASE_URL = "http://localhost:8081/holidaysapi/api/holidays";

export default class HolidaysTableData {

    public static getTableData() {
        return axios.get(BASE_URL);
    }
    
}
