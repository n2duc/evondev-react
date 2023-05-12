import useClickOutSide from '../customHooks/useClickOutSide';

const Dropdown = () => {
    const { show, setShow, nodeRef } = useClickOutSide();
    return (
        <div className='relative w-full max-w-[400px] ml-5' ref={nodeRef}>
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

export default Dropdown;