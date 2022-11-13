import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import textReducer from './textSlice';

const createDebugger = require('redux-flipper').default;

const rootReducer = combineReducers({
  text: textReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(createDebugger()),
});

export default store;
