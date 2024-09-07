import React from 'react'
import bgImg from "/bgimg.png"
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="img-container w-[100%] h-[50%] relative">
                <img className='w-[100%] absolute z-[-1] bg-fit ' src={`${bgImg}`} alt="" />
                <div className="text-content z-[5]">
                    <div className="title text-white text-center left-1/2 my-12 -translate-x-1/2 absolute">
                        <h1 className='text-6xl font-bold mb-10'>Purecare</h1>
                        <h3 className='text-4xl w-96 font-semibold'>Your Path to Wellness
                            Starts with a Symptom</h3>
                    </div>
                </div>
                <div className="btn-container left-[50%] my-[250px] -translate-x-1/2 absolute flex gap-10">
                    <NavLink to="/symptoms" className="symptoms p-2 bg-[#245CF5] w-40 text-white text-center rounded-lg cursor-pointer transition-colors hover:bg-[#1a53ee]">
                        Check Symptoms
                    </NavLink>
                    <NavLink to="/appointment" className="symptoms px-4 py-2 bg-[#f3f3f3] w-50 text-gray-500 text-center rounded-lg cursor-pointer transition-colors hover:bg-[#e1e2e3]">
                        Book A Appointment
                    </NavLink>
                </div>
            </div>
            <div className="get-started w-full  bottom-0 absolute ">
                <h1 className='bg-gradient-to-r from-[#141f34] via-[#081225] to-[#141f34] top-[130%] py-4 w-full text-center text-white rounded-t-2xl text-2xl '>How to Get Started</h1>
                <div className="points text-white w-full flex px-3 py-10 bg-[#081225]">
                    <div className="left w-1/2  border-r-[1px] mr-3">
                        <li className='text-lg mb-4'> To begin, enter the symptoms that best describe how you're feeling

                        </li>
                        <li className='pr-3 text-lg mb-4'> You can type them in your own words or choose from the list of matching suggestions that appear as you type</li>
                        <li className='text-lg'>Select the option that most closely matches your condition</li>
                    </div>
                    <div className="right w-1/2">
                        <li className='text-lg mb-4'>If no suggestions appear, try double-checking your spelling or using different words to describe your symptoms.</li>
                        <li className='text-lg mb-4'>you'll be taken to a page that lists potential conditions related to the symptoms you entered.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home