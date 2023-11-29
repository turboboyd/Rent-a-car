import { createStore } from 'redux';
import advertsReducer from './advertReducer';



const store = createStore(advertsReducer);


export default store