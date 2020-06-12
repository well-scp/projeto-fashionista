import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from '../reducer/reducer';

const rootReducer = (state, action) => {
  return reducer(state, action)
}

const persistConfig = {
  key: 'fashionista',
  storage,
  whitelist: ['cart'], // para não "guardar" content
}

// enhanced reducer - redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,

  // para usar redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// persistor object
const persistor = persistStore(store)

export { store, persistor };