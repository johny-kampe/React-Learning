import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const getCurrentDate = () => {
  const date = new Date()
  return date.toDateString()
}

const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(greeting);
