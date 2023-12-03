import React from 'react';
import { formatMileage } from 'utils';
import PropTypes from 'prop-types';

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

MileageInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
