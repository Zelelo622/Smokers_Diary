import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserLibr from './libr/UserLibr';


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={
    {
      user: new UserLibr()
    }
  }>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Context.Provider>
);

reportWebVitals();
