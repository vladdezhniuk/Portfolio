import { useRoutes } from 'react-router-dom';

import { Home } from '@/app/pages/Home';
import { About } from '@/app/pages/About';
import { Projects } from '@/app/pages/Projects';
import { Contact } from '@/app/pages/Contact';

export class ComponentRoutes {
    constructor(
        public path: string,
        public element: JSX.Element,
        public children?: ComponentRoutes[]
    ) { }

    /** Adds component to children array.  */
    public addChildren(children: ComponentRoutes[]): void {
        this.children = children;
    }
}

/**
 * RoutesConfig contains information about all routes and subroutes.
 */
export class RoutesConfig {
    public static Home = new ComponentRoutes(
        '/',
        <Home />
    );
    public static About = new ComponentRoutes(
        '/about',
        <About />
    );
    public static Projects = new ComponentRoutes(
        '/projects',
        <Projects />
    );
    public static Contact = new ComponentRoutes(
        '/contact-me',
        <Contact />
    );

    /** Routes is an array of logical router components */
    public static routes: ComponentRoutes[] = [
        RoutesConfig.Home,
        RoutesConfig.About,
        RoutesConfig.Projects,
        RoutesConfig.Contact,
    ];
}

export const Switch = () => {
    const routes = useRoutes(RoutesConfig.routes);

    return routes;
}
