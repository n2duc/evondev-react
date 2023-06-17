import React from "react";
import "./App.scss";
// import FetchingData from "./components/advanced-react/hocs/FetchingData";
// import Title from "./components/advanced-react/render-props/Title";
// import HandleValue from "./components/advanced-react/render-props/HandleValue";
import ListAccordion from "./components/advanced-react/composition/ListAccordion";
import SwitchProps from "./components/advanced-react/props-collections-getters/SwitchProps";
import Counter from "./components/advanced-react/state-reducer/Counter";
import useCounter from "./components/advanced-react/state-reducer/useCounter";
// import Counter from "./components/advanced-react/control-props/Counter";

const App = () => {
    // const [count, setCount] = useState(5);
    // const handleCountChange = (newCount) => {
    //     if (newCount > 10) setCount(0);
    //     else setCount(newCount);
    // }
    const userReducer = (state, action) => {
        switch (action.type) {
            case "decrement":
                return {
                    count: state.count - 2,
                };
            default:
                return useCounter.reducer(state, action);
        }
    };
    const { count, handleIncrement, handleDecrement }  = useCounter({ initial: 0 }, userReducer);
    return (
        <div>
            {/* <FetchingData></FetchingData>
            <Title render={() => {
                return <h1>Hello Fucking World</h1>
            }}></Title>
            <HandleValue></HandleValue> */}
            <SwitchProps></SwitchProps>
            <ListAccordion></ListAccordion>
            {/* <Counter value={count} onChange={handleCountChange}></Counter> */}
            <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}></Counter>
        </div>
    );
}

export default App;
