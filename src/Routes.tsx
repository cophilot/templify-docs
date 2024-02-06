import { Route, Routes as ReactRoutes, HashRouter } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import CommandsView from './views/CommandsView/CommandsView';
import versionCommand from './commands/versionCommand';
import newCommand from './commands/newCommand';
import helpCommand from './commands/helpCommand';
import updateCommand from './commands/updateCommand';
import initCommand from './commands/initCommand';
import listCommand from './commands/listCommand';
import loadCommand from './commands/loadCommand';
import generateCommand from './commands/generateCommand';

function Routes() {
    return (
        <>
            <HashRouter>
                <ReactRoutes>
                    <Route path="/command/help" Component={helpCommand} />
                    <Route path="/command/version" Component={versionCommand} />
                    <Route path="/command/update" Component={updateCommand} />
                    <Route path="/command/init" Component={initCommand} />
                    <Route path="/command/new" Component={newCommand} />
                    <Route path="/command/list" Component={listCommand} />
                    <Route path="/command/load" Component={loadCommand} />
                    <Route
                        path="/command/generate"
                        Component={generateCommand}
                    />

                    <Route path="/command" Component={CommandsView} />
                    <Route path="/" Component={HomeView} />
                    <Route path="*" Component={HomeView} />
                </ReactRoutes>
            </HashRouter>
        </>
    );
}

export default Routes;
