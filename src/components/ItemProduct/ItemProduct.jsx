import React from 'react';
import CardProduct from 'components/CardProduct/CardProduct';
import css from './ItemProduct.module.css';
import useAdvert from 'hooks/useAdvert';
import BasicModal from 'components/Modal/BasicModal';
import ModalCardAuto from 'components/Modal/ModalCardAuto';
import useModal from 'hooks/useModal';
import { FAVORITES_ROUTE } from 'utils/const';

function ItemProduct() {
  const { adverts, favouriteAdverts } = useAdvert();
  const { isModal, isModalOpen } = useModal();
  const isFavoritesRoute = window.location.pathname.endsWith(FAVORITES_ROUTE);

  return (
    <>
      <ul className={css.item}>
        {isFavoritesRoute
          ? favouriteAdverts.map(advert => (
              <CardProduct key={advert.id} advert={advert} isModal={isModal} />
            ))
          : adverts.map(advert => (
              <CardProduct key={advert.id} advert={advert} isModal={isModal} />
            ))}
      </ul>

      {isModalOpen && (
        <BasicModal isModal={isModal}>
          <ModalCardAuto />
        </BasicModal>
      )}
    </>
  );
}

export default ItemProduct;
