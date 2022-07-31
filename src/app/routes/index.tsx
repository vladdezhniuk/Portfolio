import { Route, Routes } from 'react-router-dom';

import { Home } from '@/app/views/Home';
import { About } from '@/app/views/About';
import { Projects } from '@/app/views/Projects';

export class ComponentRoutes {
    constructor(
        public path: string,
        public element: JSX.Element,
        public children?: ComponentRoutes[]
    ) { }

    /** with is method that creates child sub routes path */
    public with(
        child: ComponentRoutes,
        parrent: ComponentRoutes
    ): ComponentRoutes {
        child.path = `${parrent.path}/${child.path}`;

        return this;
    }

    /** addChildren is method that adds children components to component */
    public addChildren(children: ComponentRoutes[]): ComponentRoutes {
        this.children = children.map((child: ComponentRoutes) =>
            child.with(child, this)
        );

        return this;
    }
}

/**
 * RoutesConfig contains information about all routes and subroutes.
 */
export class RoutesConfig {
    public static Home = new ComponentRoutes(
        '/',
        <Home />
    )
    public static About = new ComponentRoutes(
        '/about',
        <About />
    )
    public static Projects = new ComponentRoutes(
        '/projects',
        <Projects />
    )

    /** Routes is an array of logical router components */
    public static routes: ComponentRoutes[] = [
        RoutesConfig.Home,
        RoutesConfig.About,
        RoutesConfig.Projects,
    ]
}

export const Switch = () =>
    <Routes>
        {RoutesConfig.routes.map(
            (route: ComponentRoutes, index: number) =>
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                    caseSensitive={false}
                />
        )}
    </Routes>;