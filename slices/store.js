import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import textReducer from './textSlice';

const rootReducer = combineReducers({
  text: textReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
