import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';

function newCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['new']} />
                    <p>
                        Create a new template in the <i>.templates</i>{' '}
                        directory. This command will create a new directory for
                        the template and a new <i>.templify</i> file.
                    </p>
                    <CodeBox>{'tpy new <template-name> [flags]'}</CodeBox>
                    <h2>Arguments</h2>
                    <h3>template-name</h3>
                    <p>
                        The name of the template. This will be the name of the
                        directory that will be created in the <i>.templates</i>{' '}
                        directory.
                    </p>
                    <h2>Flags</h2>
                    <h3>-description</h3>
                    <p>
                        Provide a description for the template. This will be
                        added to the <i>.templify</i> file.
                    </p>
                    <CodeBox>
                        tpy new MyTemplate -description "This is my template."
                    </CodeBox>
                    <p>
                        <i>
                            Note: You can also set the description manually in
                            the <i>.templify</i> file after it is created.
                        </i>
                    </p>
                    <h3>-path</h3>
                    <p>
                        Provide a path that will be used when a file is
                        generated from this template. This will be added to the{' '}
                        <i>.templify</i> file.
                    </p>
                    <CodeBox>tpy new MyTemplate -path src/path/to/dir</CodeBox>
                    <p>
                        <i>
                            Note: You can also set the path manually in the{' '}
                            <i>.templify</i> file after it is created.
                        </i>
                    </p>

                    <h2>Example</h2>
                    <p>Create a new template for a React component:</p>
                    <CodeBox>
                        tpy new Component -description "A simple React
                        component." -path src/components
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

export default newCommand;
