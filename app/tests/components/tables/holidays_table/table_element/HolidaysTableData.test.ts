import HolidaysTableData from "@/components/tables/holidays_table/table_element/HolidaysTableData";
import axios from "axios";

describe('HolidaysTableData', () => {
    const baseUrl = "http://localhost:8081/holidaysapi/api";
    
    it('should make a get request through the correct uri', () => {
        const getRequestSpy = jest.spyOn(axios, "get");
        HolidaysTableData.getTableData();
        expect(getRequestSpy).toHaveBeenCalledWith(baseUrl + '/holidays');
    });
});
