import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user';
import modalReducer from './modal/modal';
import parametersReducer from './parameters/parameters';


  const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['user'],
  };
  
  const parametersPersistConfig = {
    key: 'parameters',
    storage,
    whitelist: ['parameters'],
  };

  
  const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

  const persistedParametersReducer = persistReducer(parametersPersistConfig, parametersReducer);


const store = configureStore({
  reducer: {
    parameters:persistedParametersReducer,
    modal:modalReducer,
    user: persistedUserReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;