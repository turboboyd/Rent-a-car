import React from 'react';
import CardProduct from 'components/CardProduct/CardProduct';
import css from './ItemProduct.module.css';
import useAdvert from 'hooks/useAdvert';
import BtnLoadMore from 'components/Button/BtnLoadMore';
import BasicModal from 'components/Modal/BasicModal';
import ModalCardAuto from 'components/Modal/ModalCardAuto';
import useFetchAdverts from '../../hooks/useFetchAdverts';
import useModal from 'hooks/useModal';

function ItemProduct() {
  const { showBtn, loadMore } = useFetchAdverts();
  const { adverts } = useAdvert();
  const { isModal, isModalOpen } = useModal();

  return (
    <>
      <ul className={css.item}>
        {adverts.map(advert => (
          <CardProduct key={advert.id} advert={advert} isModal={isModal} />
        ))}
      </ul>
      {showBtn && <BtnLoadMore loadMore={loadMore} />}
      {isModalOpen && (
        <BasicModal isModal={isModal}>
          <ModalCardAuto />
        </BasicModal>
      )}
    </>
  );
}

export default ItemProduct;
