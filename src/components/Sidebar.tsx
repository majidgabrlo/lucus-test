import React, { useState } from 'react'
import { FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import {routes} from '../routes/sidebar'


function Sidebar(props:any) {
    return (
        <div className={`bg-green-800 px-3 text-lg md:text-base py-4 text-white fixed w-full md:static ${props.isOpen ? "right-0" : "right-full"} md-w-unset md:col-span-3 lg:col-span-2 transition-all h-screen`}>
            <FiX className="md:hidden mb-6" onClick={()=>props.setIsOpen(false)} size={40} />
            {
                routes.map(route=><Link key={route.link} to={route.link}><div className="mb-4">{route.name}</div></Link>)
            }
        </div>
    )
}

export default Sidebar
