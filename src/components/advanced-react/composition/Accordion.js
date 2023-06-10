import React from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { AccordionProvider } from "./accordion-context";

const Accordion = ({ header, children }) => {
    return (
        <AccordionProvider>
            <div className="mb-5">
                <AccordionHeader>{header}</AccordionHeader>
                <AccordionContent>{children}</AccordionContent>
            </div>
        </AccordionProvider>
    );
};

export default Accordion;
