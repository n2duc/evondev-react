import React from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children, bodyClassname = '' }) => {
    return (
        <>
            <CSSTransition
                in={visible}
                unmountOnExit
                timeout={250}
                classNames="zoom"
            >
                {(status) => (
                    <Portal
                        visible={status !== "exited"}
                        onClose={onClose}
                        containerClassname="flex items-center justify-center"
                        bodyStyle={{ transition: "all 250ms" }}
                        bodyClassname={bodyClassname}
                    >
                        {children}
                    </Portal>
                )}
            </CSSTransition>
        </>
    );
};

export default ModalBase;
