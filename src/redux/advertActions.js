import {
  GET_ADVERTS_PENDING,
  GET_ADVERTS_SUCCESS,
  GET_ADVERTS_FAIL,
  GET_ADVERT_ONE_SUCCESS,
  ADD_FAVOURITE_ADVERT,
  REMOVE_FAVOURITE_ADVERT,
  GET_ADVERTS_FILTER_SUCCESS,
} from './advertTypes';
import { fetchAdvertsAllApi, fetchAdvertsApi, fetchAdvertsIdApi } from './API';

export const getAdvertsPending = () => ({
  type: GET_ADVERTS_PENDING,
});

export const getAdvertsSuccess = adverts => ({
  type: GET_ADVERTS_SUCCESS,
  payload: adverts,
});

export const getAdvertsFail = error => ({
  type: GET_ADVERTS_FAIL,
  payload: error,
});

export const getAdvertOneSuccess = () => ({
  type: GET_ADVERT_ONE_SUCCESS,
});

export const getAdvertsFilterSuccess = adverts => ({
  type: GET_ADVERTS_FILTER_SUCCESS,
  payload: adverts,
});

export const fetchAdverts = (page, limit, make, rentalPrice) => {
  console.log('rentalPrice: ', rentalPrice);
  console.log('page: ', page);
  console.log('limit: ', limit);
  console.log('make1: ', make);
  return async dispatch => {
    dispatch(getAdvertsPending());
    try {
      const response = await fetchAdvertsApi(page, limit, make);
      console.log('response: ', response);

      if (rentalPrice) {
        console.log('пришла цена');

        const rentalPriceNumber = Number(rentalPrice);
        const filteredData = response.data.filter(advert => {
          const advertPrice = Number(advert.rentalPrice.replace('$', ''));
          return (
            advertPrice >= rentalPriceNumber &&
            advertPrice <= rentalPriceNumber + 1
          );
        });
        console.log('filteredData: ', filteredData);
        dispatch(getAdvertsFilterSuccess(filteredData));
        return;
      }
      dispatch(getAdvertsSuccess(response.data));

      return response.data.length;
    } catch (error) {
      dispatch(getAdvertsFail(error));
    }
  };
};

export const fetchAdvertsOne = id => {
  return async dispatch => {
    dispatch(getAdvertsPending());
    try {
      const response = await fetchAdvertsIdApi(id);
      console.log('response: ', response);

      dispatch(getAdvertOneSuccess());

      return response.data;
    } catch (error) {
      dispatch(getAdvertsFail(error));
    }
  };
};

export const addFavouriteAdvert = advert => ({
  type: ADD_FAVOURITE_ADVERT,
  payload: advert,
});

export const removeFavouriteAdvert = advert => ({
  type: REMOVE_FAVOURITE_ADVERT,
  payload: advert,
});


export const filterAdverts = (make, rentalPrice, mileageRange) => {
  return async dispatch => {
    dispatch(getAdvertsPending());
    try {
      const response = await fetchAdvertsAllApi();
      console.log('response: ', response);

      const filteredData = response.data.reduce((acc, advert) => {
        if (make && advert.make !== make) {
          return acc;
        }

        if (rentalPrice) {
          const rentalPriceNumber = Number(rentalPrice);
          const advertPrice = Number(advert.rentalPrice.replace('$', ''));
          if (
            advertPrice < rentalPriceNumber ||
            advertPrice > rentalPriceNumber + 10
          ) {
            return acc;
          }
        }

        const minMileage = Number(mileageRange.min);
        const maxMileage = Number(mileageRange.max);
        if (maxMileage > 0) {
          const advertMileage = Number(advert.mileage);
          if (advertMileage <= minMileage || advertMileage >= maxMileage) {
            return acc;
          }
        }

        return [...acc, advert];
      }, []);


      dispatch(getAdvertsFilterSuccess(filteredData));
      return filteredData.length;
    } catch (error) {
      dispatch(getAdvertsFail(error));
    }
  };
};
