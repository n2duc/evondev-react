import { useState } from 'react';
import useClickOutSide from '../customHooks/useClickOutSide';
import { createPortal } from 'react-dom';

const DropdownPortal = () => {
    const { show, setShow, nodeRef } = useClickOutSide();
    const [coords, setCoords] = useState({});
    const handleClick = (e) => {
        console.log(nodeRef.current.getBoundingClientRect());
        setCoords(nodeRef.current.getBoundingClientRect());
        setShow(!show);
    }
    return (
        <div className='relative w-full max-w-[400px] ml-5' ref={nodeRef}>
            <div 
                className='p-4 border border-gray-400 rounded-lg w-full cursor-pointer'
                onClick={handleClick}
            >
                Selected
            </div>
            { show && ( 
                <DropdownList coords={coords} />
            )}
        </div>
    )
}

function DropdownList({coords}) {
    return createPortal(
        <div className='absolute w-full p-2 mt-1 border border-gray-100 rounded-lg bg-white'
                style={{
                    left: coords.left,
                    top: coords.top + coords.height + window.scrollY,
                    width: coords.width
                }}
            >
                <div className='p-3 bg-gray-100 rounded-md mb-2 cursor-pointer'>Javascript</div>
                <div className='p-3 bg-gray-100 rounded-md mb-2 cursor-pointer'>Object-C</div>
                <div className='p-3 bg-gray-100 rounded-md mb-2 cursor-pointer'>Typescript</div>
        </div>,
        document.body
    )
}

export default DropdownPortal;