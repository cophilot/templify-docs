import { Route, Routes as ReactRoutes, HashRouter } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import CommandsView from './views/CommandsView/CommandsView';
import versionCommand from './commands/versionCommand';
import newCommand from './commands/newCommand';

function Routes() {
    return (
        <>
            <HashRouter>
                <ReactRoutes>
                    <Route path="/command/version" Component={versionCommand} />
                    <Route path="/command/new" Component={newCommand} />

                    <Route path="/command" Component={CommandsView} />
                    <Route path="/" Component={HomeView} />
                    <Route path="*" Component={HomeView} />
                </ReactRoutes>
            </HashRouter>
        </>
    );
}

export default Routes;
