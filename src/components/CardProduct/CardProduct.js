import React, { useState } from 'react';
import css from './CardProduct.module.css';
import imgDef from 'images/auto.jpg';
import Modal from 'components/Modal/Modal';
function truncateString(str, maxLength, maxWords) {
  const words = str.split(' ');
  let truncated = '';

  for (let i = 0; i < maxWords && i < words.length; i++) {
    truncated += words[i] + ' ';
  }

  return truncated.trim().substring(0, maxLength);
}

function formatMileage(mileage) {
  return mileage
    .toString()
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3})/g, '$1,')
    .split('')
    .reverse()
    .join('');
}

function formatAddressFunc(address) {
  return address.split(', ');
}

function CardProduct({ advert }) {
  const {
    id,
    img,
    make,
    model,
    year,
    type,

    functionalities,
    rentalPrice,
    rentalCompany,
    address,

    mileage,
  } = advert;

  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const formatAddress = formatAddressFunc(address);
  const totalLength =
    formatAddress[1].length + formatAddress[2].length + rentalCompany.length;

  return (
    <>
      <li className={css.card}>
        <img
          className={css.img}
          src={img || imgDef}
          alt={make}
          loading="lazy"
        />
        <div className={css.title_wrap}>
          <h2 className={css.title}>
            {make} <span className={css.title_accent}>{model}</span>, {year}
          </h2>
          <p className={css.title}>{rentalPrice}</p>
        </div>
        <div className={css.wrap_text}>
          <p className={css.text}>{formatAddress[1]}</p>
          <p className={css.text}>{formatAddress[2]}</p>
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
        <button className={css.btn} onClick={isModal}>
          Learn more
        </button>

        {/* Render the modal if it is open */}
      </li>
      {isModalOpen && <Modal isModal={isModal} id={id} />}
    </>
  );
}

export default CardProduct;
