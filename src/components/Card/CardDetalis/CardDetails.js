import React from 'react';
import css from './CardDetails.module.css';
import { addressParts, formatMileage, truncateString } from 'utils';

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
    functionalities,
    } = advert;
    
  const { city, country } = addressParts(address);
  const totalLength =
    city.length + country.length + advert.rentalCompany.length;

  return (
    <>
      <div className={css.title_wrap}>
        <h2 className={css.title}>
          {make} <span className={css.title_accent}>{model}</span>, {year}
        </h2>
        <p className={css.title}>{rentalPrice}</p>
      </div>
      <div className={css.wrap_text}>
        <p className={css.text}>{city}</p>
        <p className={css.text}>{country}</p>
        <p className={css.text}>{rentalCompany}</p>
        {totalLength < 38 && <p className={css.text}>Premium</p>}
        <br />
        <p className={css.text}>{type}</p>
        <p className={css.text}>{model}</p>
        <p className={css.text}>{formatMileage(mileage)}</p>
        {functionalities.length > 0 && (
          <p className={css.text}>
            {truncateString(functionalities[0], 30, 3)}
          </p>
        )}
      </div>
    </>
  );
}

export default CardDetails;
