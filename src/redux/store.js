import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import advertsReducer from './advertReducer';

const persistConfig = {
  key: 'favourite',
  storage,
  whitelist: ['favouriteAdverts'], 
};

const persistedReducer = persistReducer(persistConfig, advertsReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
