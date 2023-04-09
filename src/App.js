import "./App.scss";
// import Blog from "./components/customHooks/Blog";
// import Dropdown from "./components/hookExample/Dropdown";
// import TextareaResize from "./components/hookExample/TextareaResize";
import HackerNewsHook from "./components/news/HackerNewsHook";
// import CallbackHook from "./components/hookExample/CallbackHook";
// import RefHook from "./components/hookExample/RefHook";
// import TextareaResize from "./components/hookExample/TextareaResize";

function App() {
    return (
        <div>
            {/* <TextareaResize />
            <Dropdown />
            <Blog /> */}
            <HackerNewsHook />
        </div>
    );
}

export default App;
