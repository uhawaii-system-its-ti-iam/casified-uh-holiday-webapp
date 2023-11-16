import React, {useState} from "react";

interface filterBarProps {
    filtering : any
    setFiltering : any
}

const FilterBar = ({filtering, setFiltering} : filterBarProps ) => {
    return (
        <div className="col-sm-3 my-3">
            <input
                className="form-control"
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
                placeholder={"Search by Holiday, Day, Month, Year "}
            />
        </div>
    )
}

export default FilterBar;