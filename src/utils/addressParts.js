import PropTypes from 'prop-types';

function addressParts(address) {
  const formatAddress = address.split(', ');
  return {
    city: formatAddress[1],
    country: formatAddress[2],
  };
}

export default addressParts;

addressParts.propTypes = {
  address: PropTypes.string.isRequired,
};

