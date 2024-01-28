import reactLogo from './assets/react.svg';
import './App.css';

function App() {
    return (
        <>
            <div>
                <a href="https://github.com/cophilot/templify" target="_blank">
                    <img
                        src="https://raw.githubusercontent.com/cophilot/templify/master/assets/logo.png"
                        className="logo"
                        alt="Vite logo"
                    />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>templify + React</h1>

            <p className="read-the-docs">
                Click on the templify and React logos to learn more
            </p>
        </>
    );
}

export default App;
