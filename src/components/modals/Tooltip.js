//1. Tạo component có tên là Tooltip
//2. Component này có props children và props text (Hover me)
//3. Áp dụng portal để khi rê chuột vào text thì sẽ hiển thị tooltip content ở phía trên, và chính giữa đoạn text
//4. Dùng kiến thức đã học, sử dụng getBoundingClientRect()
import React, { useState } from 'react';
import useHover from '../customHooks/useHover';
import { createPortal } from 'react-dom';

const Tooltip = ({children, text}) => {
    const { hovered, nodeRef } = useHover();
    const [coords, setCoords] = useState({});

    const handleHover = (e) => {
        setCoords(nodeRef.current.getBoundingClientRect());
    }
    return (
        <div>
            { hovered && <TooltipContent coords={coords}>{children}</TooltipContent> }
            <p className='font-semibold inline-block' ref={nodeRef} onMouseOver={handleHover} >{text}</p>
        </div>
    )
};

function TooltipContent({ children, coords }) {
    return createPortal(
        <p className='text-white text-xs leading-6 py-3 px-7 bg-black rounded-xl inline-block absolute -translate-y-full max-w-[300px] -translate-x-2/4'
            style={{
                top: coords.top - coords.height / 2 + window.scrollY,
                left: coords.left + coords.width / 2,
            }}
        >
            {children}
        </p>,
        document.body
    )
}

export default Tooltip;