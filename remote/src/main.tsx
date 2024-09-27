import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { CommonUIThemeProvider } from '@olmero/common-ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocaleProvider } from '@olmero/core';
import { RouterProvider } from 'react-router-dom';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './pages/router';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <LocaleProvider>
      <CommonUIThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </CommonUIThemeProvider>
    </LocaleProvider>
  </StrictMode>,
);
