import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';

interface Props {
    column: string;
    orderByField: string;
    reverseSort: boolean;
}

const SortArrow = ({ column, orderByField, reverseSort }: Props) => {
    return (
        <span>
            {column === orderByField && (reverseSort ? <ArrowUp title="ArrowUp" /> : <ArrowDown title="ArrowDown" />)}
        </span>
    );
}

export default SortArrow;
