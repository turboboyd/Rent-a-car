
import {
  GET_ADVERTS_PENDING,
  GET_ADVERTS_SUCCESS,
  GET_ADVERTS_FAIL,
  GET_ADVERT_ONE_SUCCESS,
  ADD_FAVOURITE_ADVERT,
  REMOVE_FAVOURITE_ADVERT,
  GET_ADVERTS_FILTER_SUCCESS,
} from './advertTypes';
import { fetchAdvertsApi, fetchAdvertsIdApi } from './API';


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

  return async dispatch => {
    dispatch(getAdvertsPending());
    try {
      const response = await fetchAdvertsApi(page, limit, make);
      console.log('response: ', response);

      if (rentalPrice) {
        console.log('пришла цена' );
        // Convert rentalPrice to a number for comparison
        // console.log(Number(rentalPrice))
        // Filter the adverts based on rentalPrice
        const filteredData = response.data.filter(
          advert =>
            Number(advert.rentalPrice.replace('$', '')) === Number(rentalPrice)
        );
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
