import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = (props) => {
    const { onChange, inputPlaceholder } = useDropdown();
    return (
        <div className="p-2">
            <input
                type="text"
                placeholder={inputPlaceholder}
                className="p-4 w-full outline-none border border-gray-200 rounded-md"
                onChange={onChange}
            />
        </div>
    );
};

export default Search;
