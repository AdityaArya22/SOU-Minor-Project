import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  // Access matchedSymtomps from the Redux store
  const matchedSymtomps = useSelector((state) => state.symptoms.matchedSymtomps);

  return (
    <div className='p-20'>
      {matchedSymtomps.map((item, id) => (
        <h1 key={id} className='my-3'>
          You may have <span className='font-bold'>{item.disease}</span> as you have{' '}
          {item.symptoms.join(', ')}
        </h1>
      ))}
    </div>
  );
};

export default Results;
