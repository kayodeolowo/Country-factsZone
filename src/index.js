import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundaries from './pages/ErrorBoundaries';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundaries> 
      <App />
    </ErrorBoundaries>
  
  </React.StrictMode>
);


