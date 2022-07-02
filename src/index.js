import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes.js'

import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import "react-confirm-alert/src/react-confirm-alert.css";

ReactDOM.render(
  <React.StrictMode>
     <Routes />      
  </React.StrictMode>,
  document.getElementById('root')
);
