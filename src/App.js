import React from "react";
import "./App.scss";
// import FetchingData from "./components/advanced-react/hocs/FetchingData";
// import Title from "./components/advanced-react/render-props/Title";
// import HandleValue from "./components/advanced-react/render-props/HandleValue";
import ListAccordion from "./components/advanced-react/composition/ListAccordion";

const App = () => {
    return (
        <div>
            {/* <FetchingData></FetchingData>
            <Title render={() => {
                return <h1>Hello Fucking World</h1>
            }}></Title>
            <HandleValue></HandleValue> */}
            <ListAccordion></ListAccordion>
        </div>
    );
}

export default App;
