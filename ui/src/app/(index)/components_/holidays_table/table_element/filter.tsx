'use client';

import { Dispatch, SetStateAction} from 'react';

interface FilterProps {
  filtering: string;
  setFiltering: Dispatch<SetStateAction<string>>;
}

const Filter = ({ filtering, setFiltering }: FilterProps) => {
    return (
        <div className="col-span-3 my-3">
            <input
                className="border rounded p-2 w-full"
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
                placeholder="Search by Holiday, Day, Month, Year"
            />
        </div>
    );
};

export default Filter;
