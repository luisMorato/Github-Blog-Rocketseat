import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './Routes/Routes.tsx';

import { Theme } from './Style/Theme.ts';
import { GlobalStyle } from './Style/GlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
