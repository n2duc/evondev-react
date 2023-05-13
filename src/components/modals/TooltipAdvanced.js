import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from '../Portal';

const TooltipAdvanced = ({ title, children }) => {
    const [visible, setVisible] = useState(false);
    const [coords, setCoords] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });
    const handleMouseEnter = (e) => {
        setCoords(e.target.getBoundingClientRect());
        setVisible(true);
    };
    const handleMouseLeave = (e) => {
        setVisible(false);
    }
    return (
        <div className='relative inline-block'>
            <CSSTransition
                in={visible}
                timeout={300}
                unmountOnExit
                classNames="fade"
            >
                {(status) => (
                    <Portal overlay={false} visible={status !==  "exited"}>
                        <p className='text-white text-xs leading-6 py-3 px-7 bg-black rounded-xl inline-block absolute -translate-y-full max-w-[300px] -translate-x-2/4 transition-all z-[9999] tooltip'
                            style={{
                                top: coords.top - coords.height / 2 + window.scrollY,
                                left: coords.left + coords.width / 2,
                            }}
                        >
                            {children}
                        </p>
                    </Portal>
                )}
            </CSSTransition>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{title}</div>
        </div>
    )
};

export default TooltipAdvanced;