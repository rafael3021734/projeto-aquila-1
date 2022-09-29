import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PrestadorProvider } from './contexts/prestador.context';
//import { UserProvider } from './contexts/user.context';
import { UserAuthContextProvider } from './contexts/UserAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <PrestadorProvider>
          <App />
        </PrestadorProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
