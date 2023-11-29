
import {
  GET_ADVERTS_START,
  GET_ADVERTS_SUCCESS,
  GET_ADVERTS_FAIL,
} from './advertOperation';





const initialState = {
  adverts: [],
  isLoading: false,
  status: null,
  error: null,
};


const advertsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ADVERTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ADVERTS_SUCCESS:
      return {
        ...state,
        loading: false,
        adverts: action.payload,
      };
    case GET_ADVERTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default advertsReducer;