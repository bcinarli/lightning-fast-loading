import ReactDOM from 'react-dom';
import App from './scripts/app';
import './styles/styles.scss';

const appRoot = document.querySelector('#app-root');
ReactDOM.render(<App />, appRoot);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
