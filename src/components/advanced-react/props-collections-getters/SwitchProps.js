import React, { useState } from "react";
import Switch from "../../switch/Switch";
function useToggle() {
    const [on, setOn] = useState(false);
    const toggle = () => {
        setOn((on) => !on);
    };
    const getToggleProps = ({ onClick, ...props } = {}) => {
        return {
            onClick: () => {
                onClick && onClick();
                toggle();
            },
            ...props,
        }
    }
    return {
        on,
        toggle,
        getToggleProps,
    };
}

// Props Collections, Props Getters - Kentc Dodds
const SwitchProps = () => {
    const { on, getToggleProps } = useToggle();
    return (
        <div>
            <Switch {...getToggleProps({ on })}></Switch>
            <hr />
            <button aria-label="custom-button" {...getToggleProps({
                onClick: () => console.log("custom-button clicked"),
            })}>
                {on ? "on" : "off"}
            </button>
        </div>
    );
};

export default SwitchProps;
