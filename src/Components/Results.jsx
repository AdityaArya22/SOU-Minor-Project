import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Results = () => {
  // Access matchedSymtomps from the Redux store
  const matchedSymptoms = useSelector((state) => state.symptoms.matchedSymtomps);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#859DBD] to-[#7e92e3] flex justify-center items-center p-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-8 space-y-8">
        <h1 className="text-5xl font-bold text-center text-[#081225]">
          Diagnosis Results
        </h1>
        {matchedSymptoms.length > 0 ? (
          matchedSymptoms.map((disease, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 bg-gradient-to-r from-[#f9fafb] to-[#edf2f7] shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#2c5282] mb-2">
                {disease.name}
              </h2>
              <p className="text-lg italic text-gray-500 mb-2">
                Category: <span className="text-gray-800">{disease.category}</span>
              </p>
              <p
                className={`text-lg font-semibold ${
                  disease.riskLevel === "High"
                    ? "text-red-600"
                    : disease.riskLevel === "Moderate"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Risk Level: {disease.riskLevel}
              </p>
              <p className="mt-4 text-gray-700 text-base">{disease.description}</p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-700">Symptoms</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-base">
                    <span className="font-medium text-gray-800">Common:</span>{" "}
                    {disease.commonSymptoms.join(", ")}
                  </p>
                  <p className="text-base">
                    <span className="font-medium text-gray-800">Possible:</span>{" "}
                    {disease.possibleSymptoms.join(", ")}
                  </p>
                  {disease.emergencySymptoms.length > 0 && (
                    <p className="text-base text-red-600">
                      <span className="font-medium text-red-800">Emergency:</span>{" "}
                      {disease.emergencySymptoms.join(", ")}
                    </p>
                  )}
                </div>
              </div>
              {disease.requiresMedicalAttention && (
                <p className="mt-4 text-base text-red-700 font-semibold">
                  ⚠️ This condition requires immediate medical attention.
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No matching diseases found for the selected symptoms.
          </p>
        )}
        {/* Nearby Hospitals Button */}
        <div className="text-center mt-8">
          <Link
            to="/appointment" // Replace with your desired route
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold inline-block"
          >
            Find Nearby Hospitals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
