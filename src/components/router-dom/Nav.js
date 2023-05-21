import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Link, NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
    const navLinkClass = ({ isActive }) => {
        return isActive ? 'text-blue-600' : '';
    }
    return (
        <>
            <div className='p-5 bg-blue-200 shadow-md flex items-center justify-center gap-x-5'>
                <NavLink to='/' className={navLinkClass}>Home</NavLink>
                <NavLink to='/movie' className={navLinkClass}>Movie</NavLink>
                <NavLink to='/blog' className={navLinkClass}>Blog</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Nav;