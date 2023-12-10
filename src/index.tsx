import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './App';
import reportWebVitals from './report-web-vitals';

import './index.css';
import './locales/i18n';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);

reportWebVitals();
