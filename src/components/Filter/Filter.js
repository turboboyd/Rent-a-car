import React, { useEffect, useState } from 'react';
import makes from './makes.json';
import { useDispatch } from 'react-redux';
import { fetchAdverts, filterAdverts } from 'redux/advertActions';
import css from './Filter.module.css';
import Select from 'react-select';
import { carStyles, priceStyles } from './SelectStyles';
import MileageInput from './MilegeInput/MileageInput';

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageRange, setMileageRange] = useState({ min: '', max: '' });
  const optionsCar = [
    { label: 'All', value: '' },
    ...makes.map(make => ({ label: make, value: make })),
  ];
const priceOptions = [
  { label: 'All', value: '' },
  ...[...Array(30)].map((_, i) => ({
    label: `${(i + 1) * 10}`,
    value: (i + 1) * 10,
  })),
];

  const handleMakeChange = event => {
    console.log('event: ', event);
    setSelectedMake(event.value);
  };

  const handlePriceChange = event => {
    console.log('event: ', event.value);
    setSelectedPrice(event.value);
  };

  const handleMileageChange = event => {
    const { name, value } = event.target;
    if (value < 0) {
      console.error('Mileage cannot be negative');
      return;
    }
    setMileageRange({
      ...mileageRange,
      [name]: value,
    });
  };

  const handleSearch = () => {
    if (
      selectedMake === '' &&
      selectedPrice === '' &&
      mileageRange.min === '' &&
      mileageRange.max === ''
    ) {
      return dispatch(fetchAdverts());
    }
    const make = selectedMake;
    const rentalPrice = selectedPrice;
    const mileage = mileageRange;
    dispatch(filterAdverts(make, rentalPrice, mileage));
  };
  const handleReset = () => {
    setSelectedMake('');
    setSelectedPrice('');
    setMileageRange({ min: '', max: '' });
    return dispatch(fetchAdverts());
  };
  return (
    <div className={css.filter}>
      <div className={css.wrap_label}>
        <label className={css.label} htmlFor="carMake">
          Car brand
        </label>
        <Select
          inputId="make"
          options={optionsCar}
          styles={carStyles}
          onChange={handleMakeChange}
          isSearchable={true}
          closeMenuOnSelect={false}
          placeholder="Enter the text"
        />
      </div>
      <div className={css.wrap_label}>
        <label className={css.label} htmlFor="priceRange">
          Price/ 1 hour
        </label>
        <Select
          inputId="priceRange"
          options={priceOptions}
          styles={priceStyles}
          onChange={handlePriceChange}
          isSearchable={true}
          closeMenuOnSelect={false}
          placeholder="to"
        />
      </div>
      <div className={css.wrap_label}>
        <label className={css.label} htmlFor="mileageMin">
          Car mileage / km
        </label>
        <div className={css.wrap_mileage}>
          <MileageInput
            className={css.mileageMin}
            name="min"
            value={mileageRange.min}
            onChange={handleMileageChange}
          />
          <MileageInput
            className={css.mileageMax}
            name="max"
            value={mileageRange.max}
            onChange={handleMileageChange}
          />
        </div>
      </div>

      <button className={css.btn} type="button" onClick={handleSearch}>
        Search
      </button>
      <button className={css.btn} type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Filter;
