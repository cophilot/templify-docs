import './App.scss';
import Routes from './Routes';
import { Providers } from './providers/Providers';

function App() {
    return (
        <>
            <Providers>
                <Routes />
            </Providers>
        </>
    );
}

export default App;
