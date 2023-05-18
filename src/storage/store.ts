import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user';
  import countriesReducer from './countries/countries'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'countries'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);
 const persistedCountriesReducer = persistReducer(persistConfig, countriesReducer); 

const store = configureStore({
  reducer: {
    user: persistedReducer,
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