import React, { useEffect, useState } from 'react';
import css from './ModalCardAuto.module.css';
import { useLocation } from 'react-router-dom';
import { fetchAdvertsOne } from 'redux/advertActions';
import { useDispatch } from 'react-redux';
import addressParts from 'utils/addressParts';


function ModalCardAuto() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const result = await dispatch(fetchAdvertsOne(id));
        setData(result);
        const { city, country } = addressParts(result.address);
        setCity(city);
        setCountry(country);
      };

      fetchData();
    }
  }, [id, dispatch]);

  return (
    <>
      {data && (
        <>
          <img className={css.img} src={data.img} alt={data.make} />
          <h2 className={css.title}>
            {data.make} <span className={css.title_span}> {data.model}</span>,{' '}
            {data.year}
          </h2>

          <div className={css.wrap_info}>
            
            <div className={css.block_info}>
              <p className={css.text}>{city}</p>
              <p className={css.text}>{country}</p>
              <p className={css.text}>Id: {data.id}</p>
              <p className={css.text}>Year: {data.year}</p>
              <p className={css.text}>Type: {data.type}</p>
            </div>
            <div className={css.block_info}>
              <p className={css.text}>
                Fuel Consumption: {data.fuelConsumption}
              </p>
              <p className={css.text}>Engine Size: {data.engineSize}</p>
            </div>
          </div>

          <p className={css.description}>{data.description}</p>
          <p className={css.functional}>Accessories and functionalities:</p>
          <div className={css.functional_wrap}>
            <ul className={css.block_info}>
              {data.accessories.map((accessory, i) => (
                <li className={css.text} key={i}>
                  {accessory}
                </li>
              ))}
            </ul>
            <ul className={css.block_info}>
              {data.functionalities.map((accessory, i) => (
                <li className={css.text} key={i}>
                  {accessory}
                </li>
              ))}
            </ul>
          </div>

          <p className={css.functional}>Rental Conditions: </p>
          <div className={css.wrap_rental}>
            {data.rentalConditions.split('\n').map((line, index) => (
              <p className={css.text_rental} key={index}>
                {line}
              </p>
            ))}
            <p className={css.text_rental}>Mileage: {data.mileage}</p>
            <p className={css.text_rental}>Price: {data.rentalPrice}</p>
          </div>
          <a href="tel:+380730000000" className={css.phone}>
            Rental car
          </a>
        </>
      )}
    </>
  );
}

export default ModalCardAuto;
