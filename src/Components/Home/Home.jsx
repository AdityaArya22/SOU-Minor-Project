import React from 'react';
import bgImg from '/bgimg.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="img-container w-full h-[50vh] relative flex flex-col items-center justify-center text-center">
                <img
                    className="w-full h-full object-cover absolute z-[-1]"
                    src={bgImg}
                    alt="Background"
                />
                {/* Text Content */}
                <div className="text-content z-[5]">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">Purecare</h1>
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white px-4 max-w-md mx-auto">
                        Your Path to Wellness Starts with a Symptom
                    </h3>
                </div>

                {/* Button Container */}
                <div className="btn-container z-[5] mt-8 flex flex-col sm:flex-row gap-4">
                    <NavLink
                        to="/symptoms"
                        className="symptoms py-2 sm:w-40 bg-[#245CF5] text-white text-center rounded-lg cursor-pointer transition-colors hover:bg-[#1a53ee]"
                    >
                        Check Symptoms
                    </NavLink>
                    <NavLink
                        to="/appointment"
                        className="py-2 text-nowrap w-full sm:w-40 bg-[#f3f3f3] text-gray-500 text-center rounded-lg cursor-pointer transition-colors hover:bg-[#e1e2e3] px-10 md:px-0"
                    >
                        Book A Appointment
                    </NavLink>
                </div>
            </div>

            {/* How to Get Started Section */}
            <div className="get-started w-full">
                <h1 className="bg-gradient-to-r from-[#141f34] via-[#081225] to-[#141f34] py-4 text-center text-white text-xl sm:text-2xl rounded-t-2xl">
                    How to Get Started
                </h1>
                <div className="points text-white w-full flex flex-col sm:flex-row px-3 py-10 bg-[#081225] gap-6">
                    {/* Left Section */}
                    <div className="left w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r-[1px] border-gray-700 pb-6 sm:pb-0 pr-0 sm:pr-6">
                        <ul>
                            <li className="text-sm sm:text-lg mb-4">
                                To begin, enter the symptoms that best describe how you're feeling.
                            </li>
                            <li className="text-sm sm:text-lg mb-4">
                                You can type them in your own words or choose from the list of matching
                                suggestions that appear as you type.
                            </li>
                            <li className="text-sm sm:text-lg">
                                Select the option that most closely matches your condition.
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="right w-full sm:w-1/2">
                        <ul>
                            <li className="text-sm sm:text-lg mb-4">
                                If no suggestions appear, try double-checking your spelling or using
                                different words to describe your symptoms.
                            </li>
                            <li className="text-sm sm:text-lg mb-4">
                                You'll be taken to a page that lists potential conditions related to the
                                symptoms you entered.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
