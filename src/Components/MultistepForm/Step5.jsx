import React, { useState } from 'react';

const HealthQuestionnaire = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    "Have you had this condition before?",
    "Have you recently been in contact with anyone who is sick?",
    "Are you feeling fatigued or unusually tired?",
    "Have you traveled in the past 14 days?",
    "Are you currently on any medication?"
  ];

  const handleAnswer = (question, answer) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white py-20">
      <h1 className="text-2xl font-bold mb-4">Question</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-2 px-4 w-3/4">Question</th>
            <th className="text-center py-2 px-2">Yes</th>
            <th className="text-center py-2 px-2">No</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-4 px-4">{question}</td>
              <td className="text-center">
                <button
                  onClick={() => handleAnswer(question, 'Yes')}
                  className={`w-6 h-6 rounded-full border-2 ${
                    answers[question] === 'Yes'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {answers[question] === 'Yes' && (
                    <span className="block w-4 h-4 mx-auto rounded-full bg-white" />
                  )}
                </button>
              </td>
              <td className="text-center">
                <button
                  onClick={() => handleAnswer(question, 'No')}
                  className={`w-6 h-6 rounded-full border-2 ${
                    answers[question] === 'No'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {answers[question] === 'No' && (
                    <span className="block w-4 h-4 mx-auto rounded-full bg-white" />
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

export default HealthQuestionnaire;