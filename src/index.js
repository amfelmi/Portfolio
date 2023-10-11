import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

// const originalConsoleError = console.error;
// const originalConsoleWarn = console.warn;

console.error = () => {};
console.warn = () => {};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

  console.info("".concat("\n    ___\n\   // \\\\  \n  //___\\\\  \n //-----\\\\  \n//       \\\\\n\n\n\nCaught you spying huh? O_O Check out the source code: https://github.com/amfelmi/Portfolio\n", "\n\n"))

// console.error = originalConsoleError;
// console.warn = originalConsoleWarn;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
