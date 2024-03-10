import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';
import ShortSwitch from '../components/ShortSwitch/ShortSwitch';
import Shortable from '../components/Shortable/Shortable';

function updateCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['update']} />
                    <ShortSwitch></ShortSwitch>
                    <p>Update templify to the latest or a specific version.</p>
                    <CodeBox>{'tpy update [flags]'}</CodeBox>
                    {/* <h2>Arguments</h2>
                    <h3>Arg1</h3>
                    <p>Arg1Description</p> */}
                    <h2>Flags</h2>
                    <h3>
                        <Shortable>-version|-v</Shortable>
                    </h3>
                    <p>
                        Install a specific version by providing a specific
                        version with this flag.
                    </p>
                    <CodeBox shortForm="tpy update -v X.X.X">
                        tpy update -version X.X.X
                    </CodeBox>
                    <h2>Example</h2>
                    <p>Install templify version 0.1.0:</p>
                    <CodeBox shortForm="tpy update -v 0.1.0">
                        tpy update -version 0.1.0
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

export default updateCommand;
