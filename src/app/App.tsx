import { useContext, useEffect, useRef } from 'react';

import { Navbar } from '@components/common/Navbar';
import { LoaderContext } from './context/loader';
import { RouteLoader } from './components/common/RouteLoader';
import { Switch } from './routes';

import './App.scss';

function App() {
    const { isLoading } = useContext(LoaderContext);
    const outerCursorRef = useRef<HTMLDivElement | null>(null);
    const innerCursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!outerCursorRef.current || !innerCursorRef.current) return;
            const animationParams = {
                left: `${event.clientX}px`,
                top: `${event.clientY}px`,
                opacity: '1'
            };
            innerCursorRef.current.animate(animationParams, { duration: 0, fill: 'forwards' });
            outerCursorRef.current.animate(animationParams, { duration: 500, fill: 'forwards', });
        }
        window.addEventListener('mousemove', listener);

        return () => window.removeEventListener('mousemove', listener);
    }, [])

    return (
        <>
            <div className="outer-cursor" ref={outerCursorRef} />
            <div className="inner-cursor" ref={innerCursorRef} />
            <Navbar />
            <main className="main">
                {isLoading && <RouteLoader />}
                <Switch />
            </main>
        </>
    );
}

export default App;
