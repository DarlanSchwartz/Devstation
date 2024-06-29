import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import ThemeContextProvider from '@/Contexts/Theme.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message);
});