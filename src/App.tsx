import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';
import { UserProvider } from './hooks/useUser';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Routes />
        <ToastContainer
          position="top-center"
          autoClose={3000}
        />
      </UserProvider>
    </BrowserRouter>
  );
}
