import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';





ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  
  
  ,
  document.getElementById('root')
);

export * from './ui'; 
export * from './pages';
export * from './utils';
export * from './components';