import React, { memo, useRef, useState } from 'react'

const Count = memo(({ caculate, data }) => {
    const [count, setCount] = useState(0);
    const renderRef = useRef(0);
    return (
        <div>
            <div>Count State: {count}</div>
            <div>Render: {renderRef.current++}</div>
            <button className="p-3 rounded bg-green-500 text-white" onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
});

export default Count;