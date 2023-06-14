import React, { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Count from "./Count";
import { CountProvider } from "./count-context";

const Counter = ({ value = null, initialValue = 0, onChange }) => {
    const [ count, setCount ] = useState(initialValue);
    const isControlled = value !== null && !!onChange; // !! convert to boolean
    const getCount = () => {
        return isControlled ? value : count;
    }
    const handleCountChange = (newValue) => {
        if (isControlled) {
            onChange(newValue);
        } else {
            setCount(newValue);
        }
    }
    const handleIncrement = () => {
        handleCountChange(getCount() + 1);
    }
    const handleDecrement = () => {
        handleCountChange(getCount() - 1);
    }
    return (
        <CountProvider value={{ count: getCount(), handleIncrement, handleDecrement }}>
            <div className="flex w-full max-w-[160px] mx-auto my-5 border border-gray-300 rounded-lg">
                <Decrement></Decrement>
                <Count></Count>
                <Increment></Increment>
            </div>
        </CountProvider>
    );
};

export default Counter;
