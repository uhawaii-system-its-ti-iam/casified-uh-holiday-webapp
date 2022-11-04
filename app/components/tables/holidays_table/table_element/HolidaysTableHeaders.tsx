import { useState } from 'react';
import SortArrow from './SortArrow';

interface Props {
    handleSorting: (orderByField: String, reverseSort: Boolean) => void;
}

const HolidaysTableHeaders = ({ handleSorting }: Props) => {
    const [orderByField, setOrderByField] = useState('observedDateFull.toEpochDay');
    const [reverseSort, setReverseSort] = useState(false);

    const sortBy = (column: string) => {
        setOrderByField(column);
        setReverseSort(!reverseSort);
        handleSorting(orderByField, reverseSort);
    }

    return (
        <thead>
            <tr>
                <th className="clickable noselect" onClick={() => { sortBy('description') }}>
                    Holiday <SortArrow column='description' {...{ orderByField, reverseSort }} />
                </th>
                <th className="clickable noselect" onClick={() => { sortBy('observedDateFull.toEpochDay') }}>
                    Observed <SortArrow column='observedDateFull.toEpochDay' {...{ orderByField, reverseSort }} />
                </th>
                <th className="clickable noselect" onClick={() => { sortBy('officialDateFull.toEpochDay') }}>
                    Official <SortArrow column='officialDateFull.toEpochDay' {...{ orderByField, reverseSort }} />
                </th>
            </tr>
        </thead>
    );
}

export default HolidaysTableHeaders;
