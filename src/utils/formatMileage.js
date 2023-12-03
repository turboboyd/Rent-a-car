import PropTypes from 'prop-types';

function formatMileage(mileage) {
  return mileage
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default formatMileage;

formatMileage.propTypes = {
  mileage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
