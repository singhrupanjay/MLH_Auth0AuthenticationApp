import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react"; //

const container = document.getElementById("root")
const root = createRoot(container);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;


root.render(
  <React.StrictMode>
      <Auth0Provider
        domain={domain}
        // clientID={clientID} if D in place of d the we get missing client error
        clientId={clientID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }} >
        <App />
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
