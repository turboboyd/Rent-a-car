import React, { useCallback, useEffect, useState } from 'react';
import css from './CardProduct.module.css';
import imgDef from 'images/auto.jpg';
import BasicModal from 'components/Modal/BasicModal';
import { useNavigate } from 'react-router-dom';
import ModalCardAuto from 'components/Modal/ModalCardAuto';
import IconRender from 'components/IconRender/IconRender';
import { useDispatch } from 'react-redux';
import { addFavouriteAdvert, removeFavouriteAdvert } from 'redux/advertActions';
import CardDetails from 'components/Card/CardDetalis/CardDetails';
// import useAdvert from 'hooks/useAdvert';

function CardProduct({ advert }) {
  const { id,img, make } = advert;
  const dispatch = useDispatch();
  // const { favouriteAdverts } = useAdvert();
  const [isFavourite, setIsFavourite] = useState(false);



  const handleAddToFavourites = useCallback(() => {
    if (isFavourite) {
      dispatch(removeFavouriteAdvert(advert));
    } else {
      dispatch(addFavouriteAdvert(advert));
    }
    setIsFavourite(!isFavourite);
  }, [isFavourite, advert, dispatch]);

  // const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* {isModalOpen && (
        <BasicModal isModal={isModal}>
          <ModalCardAuto />
        </BasicModal>
      )} */}
    </>
  );
}

export default CardProduct;
