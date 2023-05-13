import React from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const Modal = ({ handleClose }) => {
    if (typeof document === "undefined") return <div className="modal"></div>;
    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center modal">
            <div className="absolute inset-0 bg-black bg-opacity-25 overlay" onClick={handleClose}></div>
            <div className="modal-content w-full bg-white relative z-10 p-10 rounded-lg max-w-[482px]">
                <span className="absolute -top-3 -right-3 cursor-pointer w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border border-gray-200" onClick={handleClose}>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                            fill="#84878B"
                        />
                    </svg>
                </span>
                <h2 className="text-4xl font-medium text-center text-black mb-5">
                    Welcome Back!
                </h2>
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
            </div>
        </div>,
        document.body
    );
};

/*
Kiểm tra props, kiểu props truyền vào bằng PropTypes
*/
Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default Modal;
