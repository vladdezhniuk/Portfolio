import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import { LoaderProvider } from './app/context/loader';

import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <LoaderProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LoaderProvider>
    </>
);
