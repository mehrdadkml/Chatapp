import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import '../index.html'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement
//   < React.StrictMode >
//     <App />
//   </React.StrictMode >
// );
