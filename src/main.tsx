import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CommitteeProvider } from './components/committees/CommitteeContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CommitteeProvider>
      <App />
    </CommitteeProvider>
  </StrictMode>
);
