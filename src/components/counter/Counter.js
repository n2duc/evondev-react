import React, { useState, useEffect } from "react";
import "./counter.css";

const Counter = () => {
    // Stale State
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        // setTimeout(function delay() {
        //setCount(count + 1)
        // Ham tren nay bi Stale state
        // Fix bang cach truyen callback vao func setCount()
        //     setCount(count => count + 1)
        // }, 1000)
        // ========================================
    };
    const [info, setInfo] = useState({
        firstName: "Ngoc",
        lastName: "Duc",
    });
    useEffect(() => {
        console.log("from input");
    }, [info.lastName]);
    useEffect(() => {
        console.log(`Count: ${count}`)
    }, [count])
    return (
        <div>
            <button className="btn-count" onClick={() => setCount(count + 1)}>Count: {count}</button>
            <input
                type="text"
                name="lastName"
                value={info.lastName}
                onChange={(e) => {
                    setInfo({...info, lastName: e.target.value})
                }}
            />
        </div>
    );
};

export default Counter;
