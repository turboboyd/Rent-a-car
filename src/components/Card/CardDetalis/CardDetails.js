import React from 'react';
import css from './CardDetails.module.css';
import { addressParts, formatMileage, truncateString } from 'utils';
import PropTypes from 'prop-types';
function CardDetails({ advert }) {
  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = advert;

  const { city, country } = addressParts(address);

  const rentalCompanyWords = rentalCompany.split(' ');
  const shouldDisplayFirstWord =
    city.length + country.length + rentalCompany.length <= 35;
  const shouldDisplayTwoWord =
    type.length + model.length + accessories.length <= 25;
  const shouldDisplayType = type === model;
   const shouldDisplayModel =
     model !== 'SLK-Class' && model !== 'Range Rover Sport';
  return (
    <>
      <div className={css.title_wrap}>
        <h2 className={css.title}>
          {make}{' '}
          {shouldDisplayModel && (
            <span className={css.title_accent}>{model}</span>
          )}
          , {year}
        </h2>
        <p className={css.title}>{rentalPrice}</p>
      </div>
      <div className={css.wrap_text}>
        <div className={css.block_info}>
          <p className={css.text}>{city}</p>
          <p className={css.text}>{country}</p>
          <p className={css.text}>{rentalCompanyWords.slice(1).join(' ')}</p>
          {shouldDisplayFirstWord && (
            <p className={css.text}>{rentalCompanyWords[0]}</p>
          )}
        </div>
        <div className={css.block_info}>
          {!shouldDisplayType && <p className={css.text}>{type}</p>}
          <p className={css.text}>{model}</p>
          <p className={css.text}>{formatMileage(mileage)}</p>
          {!shouldDisplayTwoWord && (
            <p className={css.text}>{truncateString(accessories)}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CardDetails;
CardDetails.propTypes = {
  advert: PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
