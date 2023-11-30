function addressParts(address) {
  const formatAddress = address.split(', ');
  return {
    city: formatAddress[1],
    country: formatAddress[2],
  };
}

export default addressParts;
