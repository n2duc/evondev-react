import React from "react";
import { useAccordion } from "./accordion-context";
// Speciliased component
const AccordionContent = ({ children }) => {
    const { show } = useAccordion();
    return (
        <>
            {show && (
                <div className="content p-4 border border-gray-300 rounded-lg mt-2">
                    {children}
                </div>
            )}
        </>
    );
};

export default AccordionContent;
