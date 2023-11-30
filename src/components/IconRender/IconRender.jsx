import React from 'react';
import PropTypes from 'prop-types';
import sprite from 'images/svg/InlineSprite.svg';

function IconRender({ className, iconId, onClick }) {
  return (
    <svg className={className} preserveAspectRatio="none" onClick={onClick}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
}

IconRender.propTypes = {
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default IconRender;
