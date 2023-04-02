import React, { useEffect, useRef, useState } from 'react'

const RefHook = () => {
    const countRef = useRef(0);
    const inputRef = useRef(null);
    const divRef = useRef();
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        countRef.current = countRef.current + 1;
        console.log({ count, countRef });
    }
    // useEffect(() => {
    //     setInterval(() => {
    //         countRef.current = countRef.current + 1;
    //         console.log(countRef.current);
    //     }, 1000);
    // }, []);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    useEffect(() => {
        console.log(divRef.current);
        console.log("Hello")
        if (divRef.current) divRef.current.style.backgroundColor = "red";
    }, []);
    return (
        <div>
            <input type="text" ref={inputRef} placeholder='Auto focus input' className='p-3 inline-block mr-3'/>
            <button onClick={handleClick}>CLICK COUNT</button>
            <div className='input-div' ref={divRef}></div>
        </div>
    )
}

export default RefHook;