import './App.scss';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import PulseLogo from './components/PulseLogo/PulseLogo';

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
            <NavBar></NavBar>
            <div className="content">
                <PulseLogo></PulseLogo>

                <h1>templify</h1>

                <div>
                    <a
                        className="version-label"
                        href="https://github.com/cophilot/templify/releases/latest"
                        target="_blank">
                        {version}
                    </a>
                </div>

                <p className="">
                    templify is a CLI tool to keep track of templates and
                    generate files from them.
                </p>

                <a href="https://github.com/cophilot/templify" target="_blank">
                    <i className="bi bi-github icon"></i>
                </a>
                <p className="">
                    by{' '}
                    <a href="https://philipp-bonin.com/" target="_blank">
                        Philipp B.
                    </a>
                </p>
            </div>
        </>
    );
}

export default App;
