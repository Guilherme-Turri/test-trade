import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user';
  import countriesReducer from './countries/countries'


  const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['user'],
  };
  
  const countriesPersistConfig = {
    key: 'countries',
    storage,
    whitelist: ['countries'],
  };
  
  const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
  const persistedCountriesReducer = persistReducer(countriesPersistConfig, countriesReducer);
const store = configureStore({
  reducer: {
    user: persistedUserReducer,
   countries: persistedCountriesReducer 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;