import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/store';
import reportWebVitals from './reportWebVitals';
import { setAuthToken } from './util/sessionApiUtil';
import jwt_decode from 'jwt-decode';
import Root from './root'

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore({}); 
  // if (localStorage.jwtToken) {
  //   setAuthToken(localStorage.jwtToken);
  //   const user: any = jwt_decode(localStorage.jwtToken);
  //   const preloadedState = {
  //     session: {
  //       isAuthenticated: true, 
  //       user 
  //     }
  //   }
  //   store = configureStore(preloadedState);
  //   const currentTime = Date.now() / 1000;
  //   if (user.exp < currentTime) {
  //     // store.dispatch(logout()); // to do logout action
  //   } else {
  //     store = configureStore({});
  //   }
  // }
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
