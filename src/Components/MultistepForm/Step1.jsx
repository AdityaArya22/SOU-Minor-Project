import React, { useState } from 'react';
import { User, Users } from 'lucide-react';

const Step1 = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-full max-w-3xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Who's this check-up for</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <SelectionBox
            icon={<User size={64} />}
            title="Myself"
            subtitle="I am 18 and older"
            isSelected={selected === 'myself'}
            onSelect={() => handleSelect('myself')}
          />
          <SelectionBox
            icon={<Users size={64} />}
            title="Someone else"
            subtitle="Child or adult"
            isSelected={selected === 'someone-else'}
            onSelect={() => handleSelect('someone-else')}
          />
        </div>
      </div>
    </div>
  );
};

const SelectionBox = ({ icon, title, subtitle, isSelected, onSelect }) => {
  return (
    <div
      className={`flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-colors ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
      } flex-1`}
      onClick={onSelect}
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{subtitle}</p>
    </div>
  );
};

export default Step1;