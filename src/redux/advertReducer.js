import {
  GET_ADVERTS_PENDING,
  GET_ADVERTS_SUCCESS,
  GET_ADVERTS_FAIL,
  ADD_FAVOURITE_ADVERT,
  REMOVE_FAVOURITE_ADVERT,
  GET_ADVERTS_FILTER_SUCCESS,
} from './advertTypes';

const initialState = {
  adverts: [],
  favouriteAdverts: [],
  isLoading: false,
  status: null,
  error: null,
};

const loadingState = (state, action) => ({
  ...state,
  loading: true,
  error: null,
});

const errorState = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload,
});

const successState = (state, action) => ({
  ...state,
  loading: false,
  error: null,
  adverts: [...action.payload],
  // adverts: [...state.adverts, ...action.payload],
});

const addFavouriteAdvert = (state, action) => ({
  ...state,
  favouriteAdverts: [...state.favouriteAdverts, action.payload],
});

const removeFavouriteAdvert = (state, action) => ({
  ...state,
  favouriteAdverts: state.favouriteAdverts.filter(
    advert => advert.id !== action.payload.id
  ),
});

const successAdvert_Filter = (state, action) => ({
  ...state,
  adverts: action.payload,

  loading: false,
  error: null,
});

const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADVERTS_PENDING:
      return loadingState(state);
    case GET_ADVERTS_SUCCESS:
      return successState(state, action);
    case GET_ADVERTS_FAIL:
      return errorState(state, action);
    case ADD_FAVOURITE_ADVERT:
      return addFavouriteAdvert(state, action);
    case REMOVE_FAVOURITE_ADVERT:
      return removeFavouriteAdvert(state, action);
    case GET_ADVERTS_FILTER_SUCCESS:
      return successAdvert_Filter(state, action);
    default:
      return state;
  }
};

export default advertsReducer;
