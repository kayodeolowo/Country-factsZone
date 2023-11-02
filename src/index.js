import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundaries from './pages/ErrorBoundaries';
import { ThemeProvider } from './pages/themecontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> 
    <ErrorBoundaries>     
      <App />
    </ErrorBoundaries>
  </ThemeProvider>
  </React.StrictMode>
);


