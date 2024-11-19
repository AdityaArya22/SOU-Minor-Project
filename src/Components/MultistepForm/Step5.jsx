import React, { useState } from 'react';

const Step5 = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    "Have you had this condition before?",
    "Have you recently been in contact with anyone who is sick?",
    "Are you feeling fatigued or unusually tired?",
    "Have you traveled in the past 14 days?",
    "Are you currently on any medication?",
  ];

  const handleAnswer = (question, answer) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">Health Questionnaire</h1>
      <table className="w-full text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left py-2 px-2 sm:py-3 sm:px-4">Question</th>
            <th className="text-center py-2 px-2 sm:py-3 sm:px-2">Yes</th>
            <th className="text-center py-2 px-2 sm:py-3 sm:px-2">No</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className="py-3 px-2 sm:py-4 sm:px-4">{question}</td>
              <td className="text-center">
                <button
                  onClick={() => handleAnswer(question, 'Yes')}
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 transition-all ${
                    answers[question] === 'Yes'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {answers[question] === 'Yes' && (
                    <span className="block w-3 h-3 sm:w-4 sm:h-4 mx-auto rounded-full bg-white"></span>
                  )}
                </button>
              </td>
              <td className="text-center">
                <button
                  onClick={() => handleAnswer(question, 'No')}
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 transition-all ${
                    answers[question] === 'No'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {answers[question] === 'No' && (
                    <span className="block w-3 h-3 sm:w-4 sm:h-4 mx-auto rounded-full bg-white"></span>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Step5;
