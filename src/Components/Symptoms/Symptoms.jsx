import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from '../MultistepForm/Step1';
import Step2 from '../MultistepForm/Step2';
import Step3 from '../MultistepForm/Step3';
import Step4 from '../MultistepForm/Step4';
import Step5 from '../MultistepForm/Step5'; // Import Step5 directly
import { ChevronLeft } from 'lucide-react';
import diseaseData from '../MultistepForm/diesease.json'; // Your disease data file
import { useDispatch, useSelector } from 'react-redux';
import { matchedSymtomps } from '../../SymtomsSlice';
const Symptoms = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [step1Selected, setStep1Selected] = useState(null);
    const [age, setAge] = useState('');
    const [sex, setSex] = useState(null);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const navigate = useNavigate();

    const getProgressWidth = () => {
        const stepPercentages = [11, 31, 51, 71, 91];
        return `${stepPercentages[currentStep - 1]}%`;
    };

    const handleNext = () => {
        switch (currentStep) {
            case 1:
                if (!step1Selected) {
                    alert("Please select an option before proceeding.");
                    return;
                }
                break;
            case 2:
                if (!age || parseInt(age) < 18) {
                    alert("Please enter a valid age (18 or above) before proceeding.");
                    return;
                }
                break;
            case 3:
                if (!sex) {
                    alert("Please select your sex before proceeding.");
                    return;
                }
                break;
            case 4:
                if (selectedSymptoms.length === 0) {
                    alert("Please select at least one symptom before proceeding.");
                    return;
                }
                break;
            default:
                break;
        }
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(Math.max(1, currentStep - 1));
    };

    const handleSymptomSelect = (symptoms) => {
        // console.log('Selected symptoms:', symptoms);
        setSelectedSymptoms(symptoms);
    };

   const dieseases = diseaseData.relatedDiseases
   const dispatch = useDispatch()
   const state = useSelector(state => state.symptoms)
    const handleSubmit =() =>{
        console.log(state.symptoms);
        const matched = dieseases.filter((diesease)=>
            diesease.symptoms.some(symtom => state.symptoms.includes(symtom)))
        dispatch(matchedSymtomps(matched))
        navigate('/result')
        
    }

    return (
        <div className='min-h-screen bg-gradient-to-r from-[#859DBD] to-[#7e92e3] flex justify-center items-center py-8'>
            <div className="bg-white w-[90%] max-w-4xl rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="progress-bar w-full max-w-lg mx-auto bg-[#081225] h-4 rounded-lg mt-8 mb-8 relative overflow-hidden">
                    <div
                        className="progress h-4 bg-gradient-to-r from-[#B3E5FC] via-[#4DB6AC] to-[#4DB37E]"
                        style={{ width: getProgressWidth() }}
                    ></div>
                    {[10, 30, 50, 70, 90].map((left, index) => (
                        <div
                            key={index}
                            className="circle h-4 w-4 bg-white rounded-full absolute top-[1%]"
                            style={{ left: `${left}%` }}
                        ></div>
                    ))}
                </div>
                <div className="flex-grow flex flex-col justify-between p-6">
                    <div className="flex-grow flex items-center justify-center">
                        {currentStep === 1 && (
                            <Step1 selected={step1Selected} setSelected={setStep1Selected} />
                        )}
                        {currentStep === 2 && <Step2 age={age} setAge={setAge} />}
                        {currentStep === 3 && <Step3 selected={sex} setSelected={setSex} />}
                        {currentStep === 4 && (
                            <Step4
                                onSymptomSelect={handleSymptomSelect}
                                selectedSymptoms={selectedSymptoms}
                            />
                        )}
                        {currentStep === 5 && <Step5 />} {/* Use Step5 here */}
                    </div>
                    <div className="flex justify-between mt-8">
                        <div>
                            {currentStep > 1 && (
                                <button
                                    className='text-blue-500 hover:text-black flex items-center gap-2 px-4 py-2 rounded-lg text-xl sm:text-base transition-all duration-300'
                                    onClick={handleBack}
                                >
                                    <ChevronLeft className='h-6' />
                                    Back
                                </button>
                            )}
                        </div>
                        <div>
                            {currentStep === 5 ? (
                                <button
                                    className='bg-green-600 hover:bg-green-800 px-4 py-1 text-white rounded-md text-xl font-semibold'
                                   onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    className='bg-green-600 hover:bg-green-800 px-4 py-1 text-white rounded-md text-xl font-semibold'
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Symptoms;