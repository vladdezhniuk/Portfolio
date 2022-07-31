import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "./routes";
import { Navbar } from "@components/common/Navbar";
import './App.scss'

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
    )
}

export default App;
