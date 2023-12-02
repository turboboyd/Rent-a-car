import React, { useState } from 'react';

import Select from 'react-select';
import makes from './makes.json';
import css from './Filter.module.css'
import { carMenuStyles } from './SelectStyles';



const Selectors = () => {
     const options = makes.map(make => ({ label: make, value: make }));
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

    
  
  return (
    <>
      <Select
        inputId="make"
        options={options}
        styles={carMenuStyles}
        // onChange={e => updateData({ name: 'make', value: e.value })}
        isSearchable={true}
        closeMenuOnSelect={false}
        placeholder="Enter the text"
      />

      {/* <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      ></div> */}
    </>
  );
};


export default Selectors;