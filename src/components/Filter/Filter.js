import React, { useEffect, useState } from 'react';
import makes from './makes.json';
import { useDispatch } from 'react-redux';
import { fetchAdverts, filterAdverts } from 'redux/advertActions';

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageRange, setMileageRange] = useState({ min: '', max: '' });

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
  };

  const handlePriceChange = event => {
    console.log('event: ', event);
    setSelectedPrice(event.target.value);
  };

  const handleMileageChange = event => {
    setMileageRange({
      ...mileageRange,
      [event.target.name]: event.target.value,
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
    <div>
      <label htmlFor="carMake">Car brand</label>
      <select id="carMake" value={selectedMake} onChange={handleMakeChange}>
        <option value="">Усі марки</option>
        {makes.map((make, index) => (
          <option key={index} value={make}>
            {make}
          </option>
        ))}
      </select>

      <label htmlFor="priceRange">Price/ 1 hour</label>
      <select
        id="priceRange"
        value={selectedPrice}
        onChange={handlePriceChange}
      >
        <option value="">Усі ціни</option>
        {[...Array(30)].map((_, i) => (
          <option key={i} value={(i + 1) * 10}>
            {(i + 1) * 10}$
          </option>
        ))}
      </select>

      <label htmlFor="mileageMin">Сar mileage / km</label>
      <input
        id="mileageMin"
        name="min"
        type="number"
        value={mileageRange.min}
        onChange={handleMileageChange}
      />

      <label htmlFor="mileageMax">Максимальний пробіг:</label>
      <input
        id="mileageMax"
        name="max"
        type="number"
        value={mileageRange.max}
        onChange={handleMileageChange}
      />

      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <button type="button" onClick={handleReset}>
        Reser
      </button>
    </div>
  );
};

export default Filter;
