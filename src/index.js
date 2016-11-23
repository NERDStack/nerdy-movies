import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore({
  movies: [
    { name: 'Movie One' },
    { name: 'Movie Two' },
    { name: 'Movie Three' },
    { name: 'Movie Four' },
    { name: 'Movie Five' },
    { name: 'Movie Six' },
    { name: 'Movie Seven' }
]});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

