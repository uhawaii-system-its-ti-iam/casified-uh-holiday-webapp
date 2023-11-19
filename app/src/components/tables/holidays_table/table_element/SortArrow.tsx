import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';
interface sortArrowProps {
    sortDirection : string | boolean
}

const SortArrow = ({sortDirection}: sortArrowProps) => (
    <>
        {
            sortDirection === 'asc' ? <ArrowUp/> :
                sortDirection === 'desc' ? <ArrowDown/> : ''
        }
    </>
)

export default SortArrow;
