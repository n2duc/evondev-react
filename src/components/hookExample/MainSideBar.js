import React from 'react'
import useClickOutSide from "../customHooks/useClickOutSide";
import SidebarMenu from './SidebarMenu';

const MainSideBar = () => {
    const { show, setShow, nodeRef } = useClickOutSide("span");
    return (
        <div>
            <span
                onClick={() => setShow(true)}
                className="inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
            >
                Show Menu
            </span>
            <SidebarMenu show={show} ref={nodeRef}/>
        </div>
    )
}

export default MainSideBar