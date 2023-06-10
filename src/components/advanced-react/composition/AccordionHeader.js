import React from "react";
import { useAccordion } from "./accordion-context";
// Specialised component
const AccordionHeader = ({ children }) => {
    const { show, handleShow } = useAccordion();
    return (
        <header className="header cursor-pointer p-4 border border-gray-300 rounded-lg flex items-center justify-between" onClick={handleShow}>
            <span>{children}</span>
            {show ? <span>-</span> : <span>+</span>}
        </header>
    );
};

export default AccordionHeader;
