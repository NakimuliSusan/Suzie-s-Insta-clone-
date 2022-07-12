import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render( //what we need to render thats the app itself
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root') // container where we are rendering
);