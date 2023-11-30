import {
  GET_ADVERTS_PENDING,
  GET_ADVERTS_SUCCESS,
  GET_ADVERTS_FAIL,
} from './advertTypes';

const initialState = {
  adverts: [],
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



const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADVERTS_PENDING:
      return loadingState(state);
    case GET_ADVERTS_SUCCESS:
      return successState(state, action);
    case GET_ADVERTS_FAIL:
      return errorState(state, action);
    default:
      return state;
  }
};

export default advertsReducer;
