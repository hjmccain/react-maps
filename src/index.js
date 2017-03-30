import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './components/container.jsx';
import './index.css';

ReactDOM.render(
  <GoogleMap />,
  document.getElementById('root')
);
