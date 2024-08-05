import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    let [closetoggle ,setclosetoggle] = useState(false)

    function toggle(){
        setclosetoggle(!closetoggle)
    }
    return (
        <nav className="w-full p-10 bg-[#2C3E50] text-white">
            <div className="container  md:flex justify-between relative">
                <div className="logo">
                    <h1 className="font-bold uppercase text-2xl"><NavLink to={'/'}>Start Framework</NavLink></h1>
                </div>
                <ul className={`md:flex md:mt-0 mt-4 justify-between gap-6 ${closetoggle ? "block" : "hidden"} md:block`}>
                    <li className="font-bold uppercase "><NavLink to={'/about'}>about</NavLink> </li>
                    <li className="font-bold uppercase md:my-0 my-4"><NavLink to={'/portfolio'}>portfolio</NavLink></li>
                    <li  className="font-bold uppercase "><NavLink to={'/contact'}>contact</NavLink></li>
                </ul>
            </div> 
            <i className={`fas ${closetoggle?'fa-close':'fa-bars'} fa-2x absolute  top-10 right-6 cursor-pointer md:hidden`} onClick={toggle}></i>
        </nav>
    );
}

export default Navbar;

