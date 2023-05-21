import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const CountContext = createContext();
function useCount() {
    const context = useContext(CountContext);
    if (typeof context === 'undefined') {
        throw new Error("useCount must be used within CountProvider")
    }
    return context;
}
function CountProvider(props) {
    const [count, setCount] = useState(0);
    const value = [count, setCount];
    return <CountContext.Provider value={value} {...props}></CountContext.Provider>
}

function CountDisplay() {
    const context = useCount();
    const [count] = context;
    return <div>The count is: {count}</div>
}
function Counter() {
    const [, setCount] = useCount();
    const increment = () => setCount((c) => c + 1);
    return <button onClick={increment} className="p-3 rounded-lg text-white font-semibold bg-green-400">Increment count</button>
}



const IntroContext = () => {
    return (
        <div className="p-5 flex items-center justify-center gap-4">
            <CountProvider>
                <CountDisplay></CountDisplay>
                <Counter></Counter>
            </CountProvider>
        </div>
    )
};

export default IntroContext;