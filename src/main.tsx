import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';

import { AppRoutes } from 'routes/constants';

import 'index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter basename={AppRoutes.root}>
        <App />
    </BrowserRouter>
);
