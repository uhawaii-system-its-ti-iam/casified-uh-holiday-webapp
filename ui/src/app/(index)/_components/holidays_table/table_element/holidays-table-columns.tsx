import { Holiday } from "@/app/(index)/_components/holidays_table/holiday";
import {ColumnDef} from "@tanstack/table-core";

const datetimeSort = (rowA: unknown, rowB: unknown, columnId: string) => {
    const a = new Date(rowA.getValue(columnId));
    const b = new Date(rowA.getValue(columnId));
    return a.getTime() - b.getTime();
}

const HolidaysTableColumns: ColumnDef<Holiday> [] = [
    {
        header: 'HOLIDAY',
        accessorKey: 'description',
    },
    {
        header: 'OBSERVED',
        accessorKey: 'observedDateFull',
        sortDescFirst: false,
        sortingFn: datetimeSort,
    },
    {
        header: 'OFFICIAL',
        accessorKey: 'officialDateFull',
        sortDescFirst: false,
        sortingFn: datetimeSort,
    }
];

export default HolidaysTableColumns;
