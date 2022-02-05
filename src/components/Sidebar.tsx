import React, { useEffect, useState } from 'react'
import { FiX } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom';
import {routes} from '../routes/sidebar'
import './sidebar.css'


function Sidebar(props:any) {
    
    return (
        <div className={`bg-green-800 text-lg md:text-base py-4 text-white fixed w-full md:static ${props.isOpen ? "right-0" : "right-full"} md-w-unset md:col-span-3 lg:col-span-2 transition-all h-screen z-10`}>
            <FiX className="md:hidden mb-6" onClick={()=>props.setIsOpen(false)} size={40} />
            {
                routes.map(route=><NavLink className="navbar--active__links" end key={route.link} to={route.link}><div className={`mb-4 px-5 py-3`}>{route.name}</div></NavLink>)
            }
        </div>
    )
}

export default Sidebar
