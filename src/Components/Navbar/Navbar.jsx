import React, { useState } from 'react';
import Logo from '/logo.png';
import { Bell, Search, Menu } from 'lucide-react'; // Importing icons from lucide-react
import { NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="bg-gradient-to-r from-[#7d94b2] to-[#7e92e3] py-2 px-5 flex items-center justify-between">
            {/* Logo Section */}
            <div className="logo w-32 md:w-40 py-1">
                <img src={Logo} alt="Logo" />
            </div>

            {/* Navigation Links (Visible on medium and larger screens) */}
            <div className="hidden md:flex gap-8 text-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:text-white ${isActive ? "text-white" : "text-gray-200"} transition-colors`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/symptoms"
                    className={({ isActive }) =>
                        `hover:text-white ${isActive ? "text-white" : "text-gray-200"} transition-colors`
                    }
                >
                    Symptoms
                </NavLink>

                <NavLink
                    to="/appointment"
                    className={({ isActive }) =>
                        `hover:text-white ${isActive ? "text-white" : "text-gray-200"} transition-colors`
                    }
                >
                    Appointment
                </NavLink>
            </div>

            {/* Options Section: Icons + Auth */}
            <div className="flex items-center gap-5">
                {/* <div className="hidden md:flex gap-3">
                  
                    <div className="notification bg-[#5E74C9] w-10 h-10 flex justify-center items-center rounded-full transition-colors hover:bg-[#3c56c1]">
                        <Bell className="text-white" />
                    </div>

                    <div className="search bg-[#5E74C9] w-10 h-10 flex justify-center items-center rounded-full transition-colors hover:bg-[#3c56c1]">
                        <Search className="text-white" />
                    </div>
                </div> */}

                {/* Authentication Section */}
                <div className="auth hidden md:block">
                    <SignedOut>
                        {/* Sign In Button */}
                        <div className="signIn bg-[#5E74C9] text-lg px-4 py-2 text-center rounded-full transition-colors hover:bg-[#3c56c1] text-white">
                            <SignInButton />
                        </div>
                    </SignedOut>

                    <SignedIn>
                        {/* Avatar / User Button */}
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "w-10 h-10",
                                },
                            }}
                        />
                    </SignedIn>
                </div>

                {/* Hamburger Menu Button (Visible on small screens) */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white">
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Hamburger Menu Drawer */}
            {isMenuOpen && (
                <div className="absolute top-0 right-0 w-3/4 h-screen bg-white shadow-lg z-50">
                    <div className="p-4 flex justify-end">
                        <button onClick={toggleMenu} className="text-gray-800">
                            <Menu size={28} />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-4 p-6">
                        <NavLink
                            to="/"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-xl ${isActive ? "text-[#245CF5]" : "text-gray-800"} hover:text-[#245CF5]`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/symptoms"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-xl ${isActive ? "text-[#245CF5]" : "text-gray-800"} hover:text-[#245CF5]`
                            }
                        >
                            Symptoms
                        </NavLink>
                        <NavLink
                            to="/appointment"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-xl ${isActive ? "text-[#245CF5]" : "text-gray-800"} hover:text-[#245CF5]`
                            }
                        >
                            Appointment
                        </NavLink>

                        {/* Authentication Links for Mobile */}
                        <SignedOut>
                            <div className="bg-[#5E74C9] text-lg text-center rounded-md py-2 mt-4 text-white hover:bg-[#3c56c1]">
                                <SignInButton />
                            </div>
                        </SignedOut>

                        <SignedIn>
                            <UserButton
                                afterSignOutUrl="/"
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "w-12 h-12",
                                    },
                                }}
                            />
                        </SignedIn>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
