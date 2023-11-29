import React from 'react';
import { fetchAdverts, getAllAdverts } from 'redux/advertOperation';
import { useState } from 'react';
import { useEffect } from 'react';
import CardProduct from 'components/CardProduct/CardProduct';
import css from './ItemProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CATALOG_ROUTE } from 'utils/const';
import useAdvert from 'hooks/useAdvert';

function ItemProduct() {
 const [page, setPage] = useState(1);
 const dispatch = useDispatch();
 const { adverts } = useAdvert();
 console.log('adverts: ', adverts);
  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);
  const loadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <ul className={css.item}>
        {adverts.map(advert => (
          <CardProduct key={advert.id} advert={advert} />
        ))}
        {/* <Link to={CATALOG_ROUTE}>sssssssssssssss</Link> */}
      </ul>
      <button onClick={loadMore}>Load more</button>
    </>
  );
}

export default ItemProduct;
