import React from 'react';
import ReactDOM from 'react-dom/client';
//import './styles/reset.css'
//import './styles/style.css'
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);

