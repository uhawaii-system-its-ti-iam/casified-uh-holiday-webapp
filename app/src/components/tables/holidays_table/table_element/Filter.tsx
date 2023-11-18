import {Dispatch, SetStateAction, useState} from "react";

interface filterProps {
    filtering : string
    setFiltering : Dispatch<SetStateAction<string>>
}

const Filter = ({filtering, setFiltering} : filterProps ) => {
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

export default Filter;
