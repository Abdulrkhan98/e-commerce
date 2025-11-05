import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AuthStatus from './Components/AuthStatus.jsx'; // ✅ correct name

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthStatus>
    <App />
  </AuthStatus>
);
