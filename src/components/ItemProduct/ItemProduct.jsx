import React from 'react';
import { fetchAdverts } from 'redux/advertActions';
import { useState } from 'react';
import { useEffect } from 'react';
import CardProduct from 'components/CardProduct/CardProduct';
import css from './ItemProduct.module.css';
import { useDispatch } from 'react-redux';

import useAdvert from 'hooks/useAdvert';
import BtnLoadMore from 'components/Button/BtnLoadMore';

function ItemProduct() {
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  const dispatch = useDispatch();
  const { adverts } = useAdvert();

  useEffect(() => {
    const fetch = async () => {
      const responseLength = await dispatch(fetchAdverts(page));

      // Если длина ответа меньше 12, скрываем кнопку "Загрузить еще"
      if (responseLength < 12) {
        setShowBtn(false);
      }
    };

    fetch();
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

      </ul>
      {showBtn && <BtnLoadMore loadMore={loadMore} />}
    </>
  );
}

export default ItemProduct;
