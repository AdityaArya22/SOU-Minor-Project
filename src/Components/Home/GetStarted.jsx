import React from 'react'

const GetStarted = () => {
    return (
        <div>
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

export default GetStarted