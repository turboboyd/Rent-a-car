import React from 'react';
import css from './CardProduct.module.css';
function CardProduct({ advert }) {
  const {
    img,
    make,
    model,
    year,
    type,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = advert;

  const addressParts = address.split(', ');

  // Если есть хотя бы две части (город и страна), создаем соответствующие элементы p
  const addressElements = addressParts.length >= 2 && (
    <>
      <p className={css.text}>{addressParts[1]}</p>
      <p className={css.text}>{addressParts[2]}</p>
    </>
  );

  return (
    <li className={css.card}>
      <img className={css.img} src={img} alt={make} />
      <div className={css.title_wrap}>
        <h2 className={css.title}>
          {make} <span className={css.title_accent}>{model}</span>, {year}
        </h2>
        <p className={css.title}>{rentalPrice}</p>
      </div>
      <ul className={css.wrap_text}>
        {addressElements}
        <li className={css.text}>{rentalCompany}</li>
        <li className={css.text}>{type}</li>
        <li className={css.text}>{model}</li>
      </ul>
      {/* <p>{type}</p>
      <p>{fuelConsumption}</p>
      <p>{engineSize}</p>
      <p>{accessories}</p>
      <p>{functionalities}</p>
      <p>{rentalPrice}</p>
      <p>{rentalCompany}</p>
      <p>{rentalConditions}</p>
      <p>{mileage}</p> */}
    </li>
  );
}

export default CardProduct;
