import React from 'react';
import ReactDOM from 'react-dom';
import "./reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App className="p-4" />
  </React.StrictMode>,
  document.getElementById('root')
);
