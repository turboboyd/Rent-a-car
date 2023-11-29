import axios from 'axios';

axios.defaults.baseURL = 'https://6566535deb8bb4b70ef32d21.mockapi.io/Advert';

export const GET_ADVERTS_START = 'GET_ADVERTS_START';
export const GET_ADVERTS_SUCCESS = 'GET_ADVERTS_SUCCESS';
export const GET_ADVERTS_FAIL = 'GET_ADVERTS_FAIL';

export const getAdvertsStart = () => ({
  type: GET_ADVERTS_START,
});

export const getAdvertsSuccess = adverts => ({
  type: GET_ADVERTS_SUCCESS,
  payload: [...adverts],
});

export const getAdvertsFail = error => ({
  type: GET_ADVERTS_FAIL,
  payload: error,
});

export const fetchAdverts = (page= 1, pageSize = 12) => {
  return async dispatch => {
    dispatch(getAdvertsStart());

    try {
      const response = await axios.get(`?page=${page}&limit=${pageSize}`);
      dispatch(getAdvertsSuccess(response.data));
    } catch (error) {
      dispatch(getAdvertsFail(error));
    }
  };
};
