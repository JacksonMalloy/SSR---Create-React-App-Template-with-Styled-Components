// This file only gets used when proxying the CRA dev server!
// We add the BrowserRouter here so that we can use Hot Module
// Reloading on the dev server. In production, we hydrate the
// <App /> component directly through /server/render.js, thus
// skipping this component entirely.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.hydrate(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
