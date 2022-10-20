import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-o6ip4p4f8j4yu3zl.us.auth0.com'
      clientId='9wbLpMlMKOnK1cpbnrdjIJ1INuwewjXf'
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
