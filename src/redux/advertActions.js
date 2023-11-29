import axios from 'axios';
import {
  GET_ADVERTS_PENDING,
  GET_ADVERTS_SUCCESS,
  GET_ADVERTS_FAIL,
} from './advertTypes';
import { fetchAdvertsApi } from './API';

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

export const fetchAdverts = (page = 1, pageSize = 12) => {
  return async (dispatch, getState) => {
    dispatch(getAdvertsPending());
    try {
      const response = await fetchAdvertsApi(page, pageSize);
      

      dispatch(
        getAdvertsSuccess(response.data)
      );
      // const currentAdverts = getState().adverts;
      // console.log('currentAdverts: ', currentAdverts);
      // const uniqueAdverts = getUniqueAdverts(currentAdverts, response.data);
      // console.log('uniqueAdverts: ', uniqueAdverts);

      // dispatch(getAdvertsSuccess(response.data));

      return response.data.length;
    } catch (error) {
      dispatch(getAdvertsFail(error));
    }
  };
};



function getUniqueAdverts(oldAdverts, newAdverts) {
  // Объединить старые и новые объявления
  const allAdverts = [...oldAdverts, ...newAdverts];

  // Удалить дубликаты
  const uniqueAdverts = Array.from(new Set(allAdverts.map(a => a.id))).map(
    id => {
      return allAdverts.find(a => a.id === id);
    }
  );

  return uniqueAdverts;
}
