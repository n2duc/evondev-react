import { useState } from "react";
import "./App.scss";
import Modal from "./components/modals/Modal";
import DropdownPortal from "./components/hookExample/DropdownPortal";
import Tooltip from "./components/modals/Tooltip";
// import MovieSearch from "./components/movieSearch/MovieSearch";
// import MainSideBar from "./components/hookExample/MainSideBar";

function App() {
    const [show, setShow] = useState(false);
    return (
        <>
            {show && <div className="relative z-0">
                <Modal handleClose={() => setShow(false)}/>
            </div>}
            <button className="m-3 p-3 bg-green-500 rounded-lg text-white font-semibold" onClick={() => setShow(true)}>Show Form</button>
            <div className="relative z-30">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita voluptatibus magnam ex ipsam distinctio, laboriosam animi iusto non soluta in consequatur quasi nulla dolore facere blanditiis. Hic, non nemo!
                Xom Xom
            </div>
            <div className="overflow-hidden py-5">
                <DropdownPortal />
            </div>
            <div  className='p-10 ml-10 overflow-hidden'>
                <Tooltip text="Hover me">Lorem ipsum dolor sit amet</Tooltip>
            </div>
        </>
    );
}

export default App;
