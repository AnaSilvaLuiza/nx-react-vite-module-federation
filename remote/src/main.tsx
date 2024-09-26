import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { CommonUIThemeProvider } from '@olmero/common-ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './app/app';
import { LocaleProvider } from '@olmero/core';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <LocaleProvider>
      <CommonUIThemeProvider>
        <App />
      </CommonUIThemeProvider>
    </LocaleProvider>
  </StrictMode>
);
