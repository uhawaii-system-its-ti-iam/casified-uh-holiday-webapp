import HolidaysTableHeaders from './table_element/HolidaysTableHeaders';

const HolidaysTable = () => {
    const handleSorting = (orderByField: String, reverseSort: Boolean) => {
        // Sort the data
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <table className="table table-bordered table-hover table-condensed">
                        <HolidaysTableHeaders {...{ handleSorting }} />
                        {/* Insert <HolidaysTableData /> Here */}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HolidaysTable;
