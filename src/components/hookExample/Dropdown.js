import React, { useEffect, useRef, useState } from 'react'

const Dropdown = () => {
    const [show, setShow] = useState(false);
    const dropDownRef = useRef(null);
    useEffect(() => {
        function handleDropDown(e) {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener('click', handleDropDown);
        
        return () => {
            document.removeEventListener('click', handleDropDown);
        }
    }, []);
    return (
        <div className='relative w-full max-w-[400px] ml-5' ref={dropDownRef}>
            <div 
                className='p-4 border border-gray-400 rounded-lg w-full cursor-pointer'
                onClick={() => setShow(!show)}
            >
                Selected
            </div>
            { show && ( <div className='absolute w-full p-2 mt-1 border border-gray-100 rounded-lg bg-white'>
                <div className='p-3 bg-gray-100 rounded-md mb-2 cursor-pointer'>Javascript</div>
                <div className='p-3 bg-gray-100 rounded-md mb-2 cursor-pointer'>Object-C</div>
                <div className='p-3 bg-gray-100 rounded-md mb-2 cursor-pointer'>Typescript</div>
            </div>
            )}
        </div>
    )
}

export default Dropdown