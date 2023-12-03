import css from './CloseButton.module.css';
import IconRender from 'components/IconRender/IconRender';
import PropTypes from 'prop-types';

const CloseButton = ({ isModal }) => {
  return (
    <button className={css.button} type="button" onClick={isModal}>
      <IconRender className={css.iconClose} iconId="Close" />
    </button>
  );
};

CloseButton.propTypes = {
  isModal: PropTypes.func.isRequired,
};

export default CloseButton;
