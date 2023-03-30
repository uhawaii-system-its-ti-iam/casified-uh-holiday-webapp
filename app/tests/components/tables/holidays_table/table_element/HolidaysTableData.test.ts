import HolidaysTableData from "@/components/tables/holidays_table/table_element/HolidaysTableData";
import axios from "axios";

describe('HolidaysTableData', () => {
    const BASE_URL = "http://localhost:8081/holidaysapi/api";
    it('should make a get request through the correct uri', () => {
        const spy = jest.spyOn(axios, "get");
        HolidaysTableData.getTableData();
        expect(spy).toHaveBeenCalledWith(BASE_URL + '/holidays');
    });
});
