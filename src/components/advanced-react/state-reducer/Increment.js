import React from "react";

const Increment = ({ onClick, ...props }) => {
    return (
        <button
            className="increment p-5 flex items-center justify-center bg-slate-300 text-lg cursor-pointer"
            onClick={onClick}
            {...props}
        >
            +
        </button>
    );
};

export default Increment;
