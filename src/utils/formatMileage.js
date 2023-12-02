function formatMileage(mileage) {
  return mileage
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default formatMileage;

