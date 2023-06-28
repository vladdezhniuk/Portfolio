import { useContext } from 'react';

import { Navbar } from '@components/common/Navbar';
import { LoaderContext } from './context/loader';
import { RouteLoader } from './components/common/RouteLoader';
import { Switch } from './routes';

import './App.scss';

function App() {
    const { isLoading } = useContext(LoaderContext);

    return (
        <>
            <Navbar />
            <main className="main">
                {isLoading && <RouteLoader />}
                <Switch />
            </main>
        </>
    );
}

export default App;
