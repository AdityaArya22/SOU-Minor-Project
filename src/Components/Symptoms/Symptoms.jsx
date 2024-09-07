import React, { useState } from 'react';
import Step1 from '../MultistepForm/Step1';
import Step2 from '../MultistepForm/Step2';
import Step3 from '../MultistepForm/Step3';
import Step4 from '../MultistepForm/Step4';
import Step5 from '../MultistepForm/Step5';

const Symptoms = () => {
    const [currentStep, setCurrentStep] = useState(1);

    // Function to calculate width percentage based on current step
    const getProgressWidth = () => {
        const stepPercentages = [11, 31, 51, 71, 91]; // Progress width for each step
        return `${stepPercentages[currentStep - 1]}%`; // Return corresponding width
    };

    return (
        <div className='h-screen bg-gradient-to-r from-[#859DBD] to-[#7e92e3] flex justify-center items-center'>
            <div className="bg-white h-[80%] w-[70%] rounded-lg relative">
                <div className="progress-bar w-1/2 bg-[#081225] h-4 top-10 rounded-lg left-1/2 -translate-x-1/2 relative overflow-hidden">
                    {/* Update progress width dynamically */}
                    <div className="progress h-4 bg-gradient-to-r from-[#B3E5FC] via-[#4DB6AC] to-[#4DB37E]" style={{ width: getProgressWidth() }}></div>
                    <div className="circle h-4 w-4 bg-white rounded-full absolute top-[1%] left-[10%]"></div>
                    <div className="circle h-4 w-4 bg-white rounded-full absolute top-[1%] left-[30%]"></div>
                    <div className="circle h-4 w-4 bg-white rounded-full absolute top-[1%] left-[50%]"></div>
                    <div className="circle h-4 w-4 bg-white rounded-full absolute top-[1%] left-[70%]"></div>
                    <div className="circle h-4 w-4 bg-white rounded-full absolute top-[1%] left-[90%]"></div>
                </div>
                {currentStep === 1 && <Step1 />}
                {currentStep === 2 && <Step2 />}
                {currentStep === 3 && <Step3 />}
                {currentStep === 4 && <Step4 />}
                {currentStep === 5 && <Step5 />}
                <div className="btn-container bottom-10 absolute px-32 flex justify-between w-full">
                    {currentStep <= 1 ? <button className='bg-[#245FFF] px-4 py-1 text-white rounded-lg text-2xl' onClick={() => setCurrentStep(1)}>Back</button> : <button className='bg-[#245FFF] px-4 py-1 text-white rounded-lg text-2xl' onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
                    {currentStep === 5
                        ? <button className='bg-[#245FFF] px-4 py-1 text-white rounded-lg text-2xl'>Submit</button>
                        : <button onClick={() => setCurrentStep(currentStep + 1)} className='bg-[#245FFF] px-4 py-1 text-white rounded-lg text-2xl'>Next</button>}
                </div>
            </div>
        </div>
    );
}

export default Symptoms;
