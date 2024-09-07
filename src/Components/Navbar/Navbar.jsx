import React from 'react'
import Logo from '/logo.png'
import { CiBellOn, CiSearch } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-[#7d94b2] to-[#7e92e3]  py-2 px-5 flex items-center justify-between'>
            <div className="logo w-40 py-1"><img src={`${Logo}`} alt="" /></div>
            <div className="links flex gap-10 text-xl">
                {/* Div For now later will be chnaged to link tage with react router dom */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:text-white ${isActive ? "text-white" : "text-gray-200"} transition-colors cursor-pointer`
                    }
                >
                    Home
                </NavLink>

                <NavLink   to="/symptoms"
                    className={({ isActive }) =>
                        `hover:text-white ${isActive ? "text-white" : "text-gray-200"} transition-colors cursor-pointer`
                    }>
                    Symptoms
                </NavLink>
                <NavLink  to="/appointment"
                    className={({ isActive }) =>
                        `hover:text-white ${isActive ? "text-white" : "text-gray-200"} transition-colors cursor-pointer`
                    }>
                    Appointment
                </NavLink>
            </div>
            <div className="options flex items-center gap-5">

                <div className="icon-container flex gap-3 items-center">
                    <div className="notification bg-[#5E74C9] w-10 h-10 flex justify-center items-center rounded-full transition-colors cursor-pointer hover:bg-[#3c56c1]">
                        <CiBellOn className='text-2xl text-white font-bold' />
                    </div>
                    <div className="search  bg-[#5E74C9] w-10 h-10 flex justify-center items-center rounded-full  transition-colors cursor-pointer hover:bg-[#3c56c1]">
                        <CiSearch className='text-2xl text-white font-bold' />
                    </div>
                </div>

                <div className="signUp bg-[#5E74C9] text-lg px-4 py-2 text-center rounded-full  transition-colors cursor-pointer hover:bg-[#3c56c1] text-white">
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default Navbar