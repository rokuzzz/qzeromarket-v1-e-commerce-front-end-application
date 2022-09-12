import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={setupStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);