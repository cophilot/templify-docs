import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';

function loadCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['load']} />
                    <p>
                        Load predefined templates from GitHub. This will add all
                        templates that are in the folder from the url, to your
                        project as a new template.
                    </p>
                    <p>
                        <b>
                            Important: Currently only works with public GitHub
                            repositories!
                        </b>
                    </p>
                    <CodeBox>{'tpy load <url> [flags]'}</CodeBox>
                    <h2>Arguments</h2>
                    <h3>url</h3>
                    <p>
                        The url to a folder inside a public GitHub repository.
                        Inside the folder should be other folders that are the
                        actually templates (same structure like local).
                    </p>
                    <h2>Flags</h2>
                    <h3>-force</h3>
                    <p>
                        Overwrite existing templates with the same name. If not
                        set, the command will be aborted if a template with the
                        same name already exists.
                    </p>
                    <CodeBox>
                        tpy load
                        https://github.com/cophilot/templify-vault/tree/main/Example
                        -force
                    </CodeBox>
                    <h3>-template</h3>
                    <p>
                        Specify that you only want to load a specific template
                        from a collection.
                    </p>
                    <CodeBox>
                        tpy load
                        https://github.com/cophilot/templify-vault/tree/main/React-js/Component
                        -template
                    </CodeBox>
                    <h2>Example</h2>
                    <p>
                        Load the predefined templates from the templify-vault
                        for a React TypeScript project:
                    </p>
                    <CodeBox>
                        tpy load
                        https://github.com/cophilot/templify-vault/tree/main/React-ts
                    </CodeBox>
                    <p>
                        Load the Component template from the templify-vault for
                        a React JavaScript project and overwrite the existing
                        Component template that is already in the project:
                    </p>
                    <CodeBox>
                        tpy load
                        https://github.com/cophilot/templify-vault/tree/main/React-js/Component
                        -template -force
                    </CodeBox>
                    <button
                        onClick={() => {
                            window.history.back();
                        }}>
                        Back
                    </button>
                </div>
            </div>
        </>
    );
}

export default loadCommand;
