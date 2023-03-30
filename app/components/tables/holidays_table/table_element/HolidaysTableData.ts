import axios from 'axios';

//TODO: Change BASE_URL to include domain from property file

const BASE_URL = "http://localhost:8081/holidaysapi/api/holidays";

class HolidaysTableData {

    getTableData(){
        return axios.get(BASE_URL);
    }

}

export default new HolidaysTableData();
