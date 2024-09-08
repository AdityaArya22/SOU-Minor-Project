import React, { useState } from 'react';

const Step2 = () => {
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleAgeChange = (e) => {
    const inputAge = e.target.value;
    setAge(inputAge);
    
    if (inputAge && parseInt(inputAge) < 18) {
      setError('Your age must be 18 or above');
    } else {
      setError('');
    }
  };
  return (
    <div className="flex items-center justify-center py-20">
      <div className="bg-white p-8 w-full max-w-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">How old are you</h2>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 text-center">Your age must be 18 or above</p>
        
        <div className="relative mb-6">
          <input
            value={age}
            onChange={handleAgeChange}
            className="w-full px-4 py-3 text-xl sm:text-2xl border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            min="18"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl sm:text-2xl">years old</span>
        </div>
        
        {error && (
          <p className="text-red-500 text-lg sm:text-xl mt-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Step2