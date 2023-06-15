import React from "react";

const Decrement = ({ onClick, ...props }) => {
    return (
        <button
            className="decrement p-5 flex items-center justify-center bg-slate-300 text-lg cursor-pointer"
            onClick={onClick}
            {...props}
        >
            -
        </button>
    );
};

export default Decrement;
