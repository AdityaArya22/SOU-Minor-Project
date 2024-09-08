import React, { useState } from 'react';
import { User, Users } from 'lucide-react';
import { FaMagnet, FaMars, FaVenus } from 'react-icons/fa';
import { FaM, FaMarsAndVenus } from 'react-icons/fa6';

const Step3 = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-full max-w-3xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">What's is your sex ?</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <SelectionBox
            icon={<FaMars size={64} />}
            title="Male"
            isSelected={selected === 'male'}
            onSelect={() => handleSelect('male')}
          />
          <SelectionBox
            icon={<FaVenus size={64} />}
            title="Female"
            isSelected={selected === 'female'}
            onSelect={() => handleSelect('female')}
          />
        </div>
      </div>
    </div>
  );
};

const SelectionBox = ({ icon, title, isSelected, onSelect }) => {
  return (
    <div
      className={`flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-colors ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
      } flex-1`}
      onClick={onSelect}
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
    </div>
  );
};

export default Step3;