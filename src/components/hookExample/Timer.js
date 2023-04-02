import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
    const timerRef = useRef(null);
    const [count, setCount] = useState(0);
    
    const handleStart = () => {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => {
            setCount((count) => count+1);
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);
    console.log("Render");
    return (
        <div>
            <h3>Timer: {count}</h3>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
};

export default Timer;
