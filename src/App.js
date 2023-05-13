import React, { useState } from "react";
import "./App.scss";
import ModalBase from "./components/modals/ModalBase";
import ModalAdvanced from "./components/modals/ModalAdvanced";

function App() {
    const [openModalBase, setOpenModalBase] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    return (
        <>  
            <button className="m-5 p-5 rounded-lg text-white bg-green-400 text-center" onClick={() => setOpenModalBase(true)}>
                Open Modal Base
            </button>
            <button className="m-5 p-5 rounded-lg text-white bg-green-400 text-center" onClick={() => setOpenModal(true)}>
                Open Modal
            </button>
            <ModalBase visible={openModalBase} onClose={() => setOpenModalBase(false)}>
                <div className="bg-white p-10 rounded-lg w-full max-w-[340px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus, illo sunt ipsa pariatur distinctio repellat a error quae quo et, accusantium ut nobis architecto culpa nostrum perferendis debitis nam.
                </div>
            </ModalBase>
            <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)} heading="Welcome Back" bodyClassname="w-full max-w-[400px] bg-white relative z-10 p-10 rounded-lg">
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
        </>
    );
}

export default App;
