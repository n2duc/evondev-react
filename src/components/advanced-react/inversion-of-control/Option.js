import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = ({ children }) => {
    const context = useDropdown();
    console.log(context)
    return (
        <div
            className="option-item p-4 cursor-pointer flex items-center justify-between"
            onClick={() => context.onClick(children)}
        >
            {children}
        </div>
    );
};

export default Option;
