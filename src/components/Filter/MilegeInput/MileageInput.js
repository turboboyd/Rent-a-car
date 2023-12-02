
import React from 'react';
import { formatMileage } from 'utils';

const MileageInput = ({ name, value, onChange, className }) => (
  <input
    className={className}
    id={name}
    name={name}
    min="0"
    step="1"
    value={formatMileage(value)}
    onChange={onChange}
  />
);

export default MileageInput;
