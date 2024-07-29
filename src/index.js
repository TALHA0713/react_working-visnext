import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// In React, StrictMode is a component that helps highlight potential problems in your application during development.
//  When you wrap your application or a part of it in <React.StrictMode>, React performs additional checks and warnings for potential issues in your code.

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
    