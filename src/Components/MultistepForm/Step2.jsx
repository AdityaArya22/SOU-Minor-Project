import React from "react";

const Step2 = ({ age, setAge }) => {
  const handleAgeChange = (e) => {
    const inputAge = e.target.value.replace(/\D/g, ""); // Prevent non-numeric input
    setAge(inputAge);
  };

  return (
    <div className="flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="w-full max-w-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center">
          How old are you?
        </h2>
        {/* <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 text-center">
          Your age must be 18 or above.
        </p> */}

        <div className="relative mb-4 sm:mb-6">
          <input
            value={age}
            onChange={handleAgeChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-lg sm:text-xl md:text-2xl border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300"
           
            min="18"
            placeholder="Enter your age"
          />
          <span className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl md:text-2xl">
            years old
          </span>
        </div>

        {age && parseInt(age) < 18 && (
          <p className="text-red-500 text-base sm:text-lg md:text-xl mt-2 sm:mt-4 text-center">
            You must be at least 18 years old to proceed.
          </p>
        )}
      </div>
    </div>
  );
};

export default Step2;
