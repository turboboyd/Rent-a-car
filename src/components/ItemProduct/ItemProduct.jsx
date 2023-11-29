import React from 'react';
import { getAllAdverts } from 'servises/advertOperation.';
import { useState } from 'react';
import { useEffect } from 'react';
import CardProduct from 'components/CardProduct/CardProduct';
import css from './ItemProduct.module.css';

function ItemProduct() {
  const [adverts, setAdverts] = useState([]);
  console.log('adverts: ', adverts);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllAdverts();
      setAdverts(data);
    }

    fetchData();
  }, []);

  return (
    <ul className={css.item}>
      {adverts.map(advert => (
        <CardProduct key={advert.id} advert={advert} />
      ))}
    </ul>
  );
}

export default ItemProduct;
