import React, { useEffect, useState } from 'react';
import makes from './makes.json';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from 'redux/advertActions';

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageRange, setMileageRange] = useState({ min: '', max: '' });

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
  };

  const handlePriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const handleMileageChange = event => {
    setMileageRange({
      ...mileageRange,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = () => {
    const make = selectedMake;
    const rentalPrice = selectedPrice;
    const mileage = mileageRange;
    const page = 1;
    const limit = 12;
    dispatch(fetchAdverts(page, limit, make, rentalPrice, mileage));
  };

  return (
    <div>
      <label htmlFor="carMake">Виберіть марку автомобіля:</label>
      <select id="carMake" value={selectedMake} onChange={handleMakeChange}>
        <option value="">Усі марки</option>
        {makes.map((make, index) => (
          <option key={index} value={make}>
            {make}
          </option>
        ))}
      </select>

      <label htmlFor="priceRange">Виберіть ціновий діапазон:</label>
      <select
        id="priceRange"
        value={selectedPrice}
        onChange={handlePriceChange}
      >
        <option value="">Усі ціни</option>
        {[...Array(30)].map((_, index) => (
          <option key={index} value={index * 10}>
            {index * 10}$
          </option>
        ))}
      </select>

      <label htmlFor="mileageMin">Мінімальний пробіг:</label>
      <input
        id="mileageMin"
        name="min"
        value={mileageRange.min}
        onChange={handleMileageChange}
      />

      <label htmlFor="mileageMax">Максимальний пробіг:</label>
      <input
        id="mileageMax"
        name="max"
        value={mileageRange.max}
        onChange={handleMileageChange}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filter;
