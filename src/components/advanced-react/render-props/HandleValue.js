import React, { useState } from "react";
// lifting state
const HandleValue = () => {
    return <Input render={(value) => <DisplayValue value={value} />}></Input>;
    // return <Input>{(value) => <DisplayValue value={value} />}</Input>;
};

const Input = (props) => {
    const [value, setValue] = useState("");
    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {/* {typeof props.children === "function"
                ? props.children(value)
                : null} */}
                {props.render(value)}
        </>
    );
};

const DisplayValue = ({ value }) => {
    return <span>{value}</span>;
};

export default HandleValue;
