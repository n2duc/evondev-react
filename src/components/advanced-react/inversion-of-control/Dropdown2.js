import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown2 = ({ placeholder = "Please select an option", children, ...props }) => {
    const [show, setShow] = useState(false);
    const handleToggleDrop = () => {
        setShow(!show);
    };
    return (
        <DropdownProvider {...props}>
            <div className="relative inline-block w-full max-w-[300px]">
                <div
                    className="placeholder flex items-center justify-between p-4 border border-gray-300 rounded-md cursor-pointer"
                    onClick={handleToggleDrop}
                >
                    {placeholder}
                </div>
                {show && children}
            </div>
        </DropdownProvider>
    );
};

export default Dropdown2;
