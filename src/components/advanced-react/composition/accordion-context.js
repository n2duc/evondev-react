import { createContext, useContext } from "react";
import useToggle from "./useToggle";

const AccordionContext = createContext();
function AccordionProvider(props) {
    const [show, handleShow] = useToggle();
    const values = { show, handleShow };
    return (
        <AccordionContext.Provider
            value={values}
            {...props}
        ></AccordionContext.Provider>
    );
}
function useAccordion() {
    const context = useContext(AccordionContext);
    if (typeof context === "undefined") {
        throw new Error("useAccordion must be used within a AccordionProvider");
    }
    return context;
}
export { AccordionProvider, useAccordion };
