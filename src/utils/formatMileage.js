function formatMileage(mileage) {
  return mileage
    .toString()
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3})/g, '$1,')
    .split('')
    .reverse()
    .join('');
}


export default formatMileage;