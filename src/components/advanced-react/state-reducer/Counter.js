import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Count from "./Count";
import { CountProvider } from "./count-context";

const Counter = ({
    count = 0,
    handleIncrement = () => {},
    handleDecrement = () => {},
}) => {
    return (
        <CountProvider value={{ count }}>
            <div className="flex w-full max-w-[160px] mx-auto my-5 border border-gray-300 rounded-lg">
                <Decrement onClick={handleDecrement}></Decrement>
                <Count></Count>
                <Increment onClick={handleIncrement}></Increment>
            </div>
        </CountProvider>
    );
};

export default Counter;
