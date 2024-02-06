import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';

function initCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['init']} />
                    <p>
                        Initialize templify in the current directory. This will
                        create a <i>.templates</i> folder in the root folder of
                        your project. By default an Example template will be
                        fetched to demonstrate the concept of templify.
                    </p>
                    <CodeBox>{'tpy init [flags]'}</CodeBox>
                    {/* <h2>Arguments</h2>
                    <h3>Arg1</h3>
                    <p>Arg1Description</p> */}
                    <h2>Flags</h2>
                    <h3>-offline</h3>
                    <p>
                        When this flag is specified, templify will not fetch the
                        example template, so you can use the command offline.
                    </p>
                    <CodeBox>tpy init -offline</CodeBox>
                    {/* <h2>Example</h2>
                    <CodeBox>tpy init</CodeBox> */}
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

export default initCommand;
