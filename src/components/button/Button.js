import React from "react";
// import './Button.scss'
import styles from "./Button.module.css";

const Button = (props) => {
    console.log(styles);
    return (
        <button className={`${styles.button} ${props.secondary ? styles.buttonSecondary : ''}`}>
            {props.children}
        </button>
    );
};

export default Button;
