import './App.scss';
import { useEffect, useState } from 'react';

function App() {
    const [version, setVersion] = useState<string>('loading...');

    useEffect(() => {
        fetch(
            'https://api.github.com/repos/cophilot/templify/releases/latest'
        ).then((response) => {
            response.json().then((data) => {
                setVersion('v' + data.tag_name);
            });
        });
    }, []);

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
            </div>
            <h1>templify</h1>

            <div>
                <a
                    className="version-label"
                    href="https://github.com/cophilot/templify/releases/latest"
                    target="_blank">
                    {version}
                </a>
            </div>

            <p className="read-the-docs">
                templify is a CLI tool to keep track of templates and generate
                files from them.
            </p>
            <a href="https://github.com/cophilot/templify" target="_blank">
                <i className="bi bi-github icon"></i>
            </a>
            <p className="read-the-docs">
                by{' '}
                <a href="https://philipp-bonin.com/" target="_blank">
                    Philipp B.
                </a>
            </p>
        </>
    );
}

export default App;
