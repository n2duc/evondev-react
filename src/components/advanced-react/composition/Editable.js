import React from "react";
import useToggle from "./useToggle";

const Editable = () => {
    const [ edit, handleEdit ] = useToggle();
    return (
        <div>
            { edit && <input type="text" className="p-2 bg-slate-200 rounded-md border border-slate-500" /> }
            <button onClick={handleEdit}>Open Edit</button>
        </div>
    );
};

export default Editable;
