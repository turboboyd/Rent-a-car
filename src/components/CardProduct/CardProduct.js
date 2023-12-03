import React, { useCallback, useEffect, useState } from 'react';
import css from './CardProduct.module.css';
import imgDef from 'images/auto.jpg';

import { useNavigate } from 'react-router-dom';

import IconRender from 'components/IconRender/IconRender';
import { useDispatch } from 'react-redux';
import { addFavouriteAdvert, removeFavouriteAdvert } from 'redux/advertActions';
import CardDetails from 'components/Card/CardDetalis/CardDetails';
import useAdvert from 'hooks/useAdvert';

function CardProduct({ advert }) {
  const { id, img, make } = advert;
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);
  const { favouriteAdverts } = useAdvert();
  useEffect(() => {
    const isAdvertFavourite = favouriteAdverts.some(
      favAdvert => favAdvert.id === advert.id
    );
    setIsFavourite(isAdvertFavourite);
  }, [advert, favouriteAdverts, isFavourite]);

  const handleAddToFavourites = useCallback(() => {
    const isAdvertFavourite = favouriteAdverts.some(
      favAdvert => favAdvert.id === advert.id
    );

    if (isAdvertFavourite) {
      dispatch(removeFavouriteAdvert(advert));
      return setIsFavourite(false);
    } else {
      dispatch(addFavouriteAdvert(advert));
      setIsFavourite(true);
    }
  }, [advert, dispatch, favouriteAdverts]);

  const navigate = useNavigate();

  const isModal = () => {
    navigate(`?id=${id}`);
  };

  return (
    <>
      <li className={css.card}>
        <IconRender
          className={isFavourite ? `${css.icon}  ${css.icon_active}` : css.icon}
          iconId="heart"
          onClick={handleAddToFavourites}
        />
        <img
          className={css.img}
          src={img || imgDef}
          alt={make}
          loading="lazy"
        />
        <CardDetails advert={advert} />
        <button className={css.btn} onClick={isModal}>
          Learn more
        </button>
      </li>
    </>
  );
}

export default CardProduct;
