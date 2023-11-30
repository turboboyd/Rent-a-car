import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ isModal }) {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      isModal();
    }
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      isModal();
    }
  };

  // const { imageUrl, alt } = props;
  return createPortal(
    <div className={css.Overlay} onClick={isModal}>
      <div className={css.modal}>sss</div>
    </div>,
    // <div className={css.Overlay} onClick={onClose}>
    //   <div className={css.Modal}>
    //     <img className={css.imageUrl} src={props.imageUrl} alt={props.alt} />
    //   </div>
    // </div>,
    modalRoot
  );
}

export default Modal;
