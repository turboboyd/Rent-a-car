import axios from 'axios';
import {
  GET_ADVERTS_PENDING,
  GET_ADVERTS_SUCCESS,
  GET_ADVERTS_FAIL,
  GET_ADVERT_ONE_SUCCESS,
  ADD_FAVOURITE_ADVERT,
  REMOVE_FAVOURITE_ADVERT,
} from './advertTypes';
import { fetchAdvertsApi, fetchAdvertsIdApi } from './API';

axios.defaults.baseURL = 'https://6566535deb8bb4b70ef32d21.mockapi.io/Advert';

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


export const fetchAdverts = (page = 1, pageSize = 12) => {
  return async dispatch => {
    dispatch(getAdvertsPending());
    try {
      const response = await fetchAdvertsApi(page, pageSize);

      dispatch(getAdvertsSuccess(response.data));

      return response.data.length;
    } catch (error) {
      dispatch(getAdvertsFail(error));
    }
  };
};


export const fetchAdvertsOne = (id) => {
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