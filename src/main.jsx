import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AppContext from './context.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      {/* app is a children  prop and we must pass thhis */}
      <App />
    </AppContext>
  </React.StrictMode>
);
