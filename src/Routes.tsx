import { Route, Routes as ReactRoutes, HashRouter } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import CommandsView from './views/CommandsView/CommandsView';

/**
 * All of our routes are defined here.
 */
function Routes() {
    return (
        <>
            <HashRouter>
                <ReactRoutes>
                    <Route path="/command" Component={CommandsView} />
                    <Route path="/" Component={HomeView} />
                    <Route path="*" Component={HomeView} />
                </ReactRoutes>
            </HashRouter>
        </>
    );
}

export default Routes;
