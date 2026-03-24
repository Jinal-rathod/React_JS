
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-ctin1v4s3flqlf1c.us.auth0.com" clientId="b5x31PIHwSPkbALisz2veDMVvcZ41oc5" authorizationParams={{ redirect_uri: window.location.origin }}>
      <App />
    </Auth0Provider>
  </Provider>
);