import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import 'react-tooltip/dist/react-tooltip.css';
import './main.css';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
