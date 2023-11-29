import { GET_ADVERTS } from './advertActions';

const initialState = {
  adverts: [],
  selectedAdvert: null,
};

const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADVERTS:
      return { ...state, adverts: action.payload };
    // case GET_ADVERT:
    //   return { ...state, selectedAdvert: action.payload };
    // case CREATE_ADVERT:
    //   return { ...state, adverts: [...state.adverts, action.payload] };
    // case UPDATE_ADVERT:
    //   return {
    //     ...state,
    //     adverts: state.adverts.map(advert =>
    //       advert.id === action.payload.id ? action.payload : advert
    //     ),
    //   };
    // case DELETE_ADVERT:
    //   return {
    //     ...state,
    //     adverts: state.adverts.filter(advert => advert.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default advertsReducer;
