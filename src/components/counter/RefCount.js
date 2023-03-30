import React, { useEffect, useRef, useState } from 'react'

const RefCount = () => {
    const countRef = useRef(0);
    const ref = useRef(null);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        countRef.current = countRef.current + 1;
    }
    
    useEffect(() => {
        setInterval(() => {
            countRef.current = countRef.current + 1;
            console.log({ countRef: countRef.current })
        }, 1000)
    }, []);
    useEffect(() => {
        ref.current.focus();
    })
    return (
        <div>
            <input type="text" ref={ref}/>
            <button onClick={handleClick}>CLICK COUNT</button>
        </div>
    )
}

export default RefCount