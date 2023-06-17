import React from "react";
import "./App.scss";
import FirebaseApp from "./firebase/FirebaseApp";
import FirebaseAuth from "./firebase/FirebaseAuth";

const App = () => {
    return (
        <div>
            <FirebaseApp></FirebaseApp>
            <FirebaseAuth></FirebaseAuth>
        </div>
    );
};

export default App;
