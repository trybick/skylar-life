import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const WrappedApp = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<WrappedApp />);
