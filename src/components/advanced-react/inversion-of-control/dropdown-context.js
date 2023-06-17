import { createContext, useContext } from "react";

const DropdownContext = createContext();

function DropdownProvider(props) {
    return (
        <DropdownContext.Provider value={props}>
            {props.children}
        </DropdownContext.Provider>
    )
}
function useDropdown() {
    const context = useContext(DropdownContext);
    if (context === undefined) {
        throw new Error("useDropdown must be used within a DropdownProvider");
    }
    return context;
}

export { DropdownProvider, useDropdown };