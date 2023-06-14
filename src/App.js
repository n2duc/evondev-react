import React, { useState } from "react";
import "./App.scss";
// import FetchingData from "./components/advanced-react/hocs/FetchingData";
// import Title from "./components/advanced-react/render-props/Title";
// import HandleValue from "./components/advanced-react/render-props/HandleValue";
import ListAccordion from "./components/advanced-react/composition/ListAccordion";
import SwitchProps from "./components/advanced-react/props-collections-getters/SwitchProps";
import Counter from "./components/advanced-react/control-props/Counter";

const App = () => {
    const [count, setCount] = useState(5);
    const handleCountChange = (newCount) => {
        if (newCount > 10) setCount(0);
        else setCount(newCount);
    }
    return (
        <div>
            {/* <FetchingData></FetchingData>
            <Title render={() => {
                return <h1>Hello Fucking World</h1>
            }}></Title>
            <HandleValue></HandleValue> */}
            <SwitchProps></SwitchProps>
            <ListAccordion></ListAccordion>
            <Counter value={count} onChange={handleCountChange}></Counter>
        </div>
    );
}

export default App;
