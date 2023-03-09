import React from "react";

const FirstTailwind = (props) => {
    return (
        <div className="relative w-[200px] h-[200px] transition ease-in-out bg-slate-500 flex items-center justify-center m-5 rounded-lg text-slate-200 hover:bg-slate-600">
            <div className="absolute">
                <span className="text-[20px] font-bold">{props.children}</span>
                <div className="mt-[20px] w-[120px] h-[20px] bg-slate-300 rounded-md"></div>
            </div>
        </div>
    );
};

export default FirstTailwind;
