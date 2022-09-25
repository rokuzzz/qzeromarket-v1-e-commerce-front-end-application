import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import setupStore from './redux/store';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 430,
      md: 780,
      lg: 1050,
      xl: 1200,
    },
  },
  zIndex: {
    appBar: 1251,
    modal: 1250,
  },
});

let persistor = persistStore(setupStore);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={setupStore}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
