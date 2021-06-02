import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './scss/style.scss';
import '@babel/polyfill';
import App from './App';
import rootReducer from './slices';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devtools: process.env.Node_ENV !== 'production',
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
