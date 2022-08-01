import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '@components/common/Navbar';
import { Switch } from './routes';

import './App.scss';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <main className="main">
                    <Switch />
                </main>
            </BrowserRouter>;
        </>
    );
}

export default App;
