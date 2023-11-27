import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WebRoutes from './routes/WebRoutes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WebRoutes />
);

reportWebVitals();
