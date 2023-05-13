import { useState } from "react";
import "./App.scss";
import Modal from "./components/modals/Modal";
import DropdownPortal from "./components/hookExample/DropdownPortal";
import Tooltip from "./components/modals/Tooltip";
import GameWithReducer from "./components/tictactoe/GameWithReducer";
import ModalBase from "./components/modals/ModalBase";
import ModalAdvanced from "./components/modals/ModalAdvanced";
import TooltipAdvanced from "./components/modals/TooltipAdvanced";
// import MovieSearch from "./components/movieSearch/MovieSearch";
// import MainSideBar from "./components/hookExample/MainSideBar";

import { ErrorBoundary } from "react-error-boundary";
function Fallback({ error }) {
    return (
        <div role="alert" className="p-5 bg-red-200 border-b-4 border-red-400">
            <p>Something went wrong:</p>
            <pre className="text-red-500">{error.message}</pre>
        </div>
    );
}

function App() {
    const [show, setShow] = useState(false);
    const [openModalBase, setOpenModalBase] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            {/* {show && <div className="relative z-0">
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
            </div> */}
            <ErrorBoundary
                FallbackComponent={Fallback}
            >
                <GameWithReducer />
            </ErrorBoundary>
            {/* Xong chương 8 - Portal */}
            <div className="p-5 flex items-center justify-center h-screen">  
            <button className="m-5 p-5 rounded-lg text-white bg-green-400 text-center" onClick={() => setOpenModalBase(true)}>
                Open Modal Base
            </button>
            <button className="m-5 p-5 rounded-lg text-white bg-green-400 text-center" onClick={() => setOpenModal(true)}>
                Open Modal
            </button>
            <ModalBase visible={openModalBase} onClose={() => setOpenModalBase(false)} bodyClassname="relative z-10">
                <div className="bg-white p-10 rounded-lg w-full max-w-[340px]">
                    <TooltipAdvanced title="Tooltip">Nguyen Ngoc Duc</TooltipAdvanced>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus, illo sunt ipsa pariatur distinctio repellat a error quae quo et, accusantium ut nobis architecto culpa nostrum perferendis debitis nam.
                </div>
            </ModalBase>
            <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)} heading="Welcome Back" bodyClassname="w-full max-w-[400px] bg-white p-10 rounded-lg">
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="email" className="text-sm cursor-pointer">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="w-full p-4 text-sm leading-normal bg-[#E7ECF3] rounded-lg"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="password" className="text-sm cursor-pointer">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full p-4 text-sm leading-normal bg-[#E7ECF3] rounded-lg"
                        placeholder="Enter your password"
                    />
                </div>
                <button className="w-full p-4 font-semibold text-base text-white bg-green-500 rounded-lg">
                    Sign in
                </button>
            </ModalAdvanced>
            <div className="inline-block ml-5">
                <TooltipAdvanced title="Tooltip">Nguyen Ngoc Duc</TooltipAdvanced>
            </div>
        </div>
        </>
    );
}

export default App;
