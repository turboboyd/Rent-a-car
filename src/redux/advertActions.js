// Action types
export const GET_ADVERTS = 'GET_ADVERTS';
export const GET_ADVERT = 'GET_ADVERT';
export const CREATE_ADVERT = 'CREATE_ADVERT';
export const UPDATE_ADVERT = 'UPDATE_ADVERT';
export const DELETE_ADVERT = 'DELETE_ADVERT';

// Action creators
export const getAdverts = adverts => ({ type: GET_ADVERTS, payload: adverts });
export const getAdvert = advert => ({ type: GET_ADVERT, payload: advert });
export const createAdvert = advert => ({
  type: CREATE_ADVERT,
  payload: advert,
});
export const updateAdvert = advert => ({
  type: UPDATE_ADVERT,
  payload: advert,
});
export const deleteAdvert = id => ({ type: DELETE_ADVERT, payload: id });
