import React from 'react';
import { User, Users } from 'lucide-react';

const Step1 = ({ selected, setSelected }) => {
    const handleSelect = (option) => {
        setSelected(option);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center">Who's this check-up for?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
                <SelectionBox
                    icon={<User className="w-16 h-16" />}
                    title="Myself"
                    subtitle="I am 18 and older"
                    isSelected={selected === 'myself'}
                    onSelect={() => handleSelect('myself')}
                />
                <SelectionBox
                    icon={<Users className="w-16 h-16" />}
                    title="Someone else"
                    subtitle="Child or adult"
                    isSelected={selected === 'someone-else'}
                    onSelect={() => handleSelect('someone-else')}
                />
            </div>
        </div>
    );
};

const SelectionBox = ({ icon, title, subtitle, isSelected, onSelect }) => {
    return (
        <button
            className={`flex flex-col items-center justify-center p-8 border-4 rounded-xl transition-all duration-300 ${
                isSelected ? 'border-[#245FFF] bg-blue-50' : 'border-gray-300 hover:border-[#245FFF]'
            }`}
            onClick={onSelect}
        >
            <div className="mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-lg text-gray-600">{subtitle}</p>
        </button>
    );
};

export default Step1;