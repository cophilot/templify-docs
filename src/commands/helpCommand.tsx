import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';

function helpCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['help']} />
                    <p>Open the help center.</p>
                    <CodeBox>{'tpy help'}</CodeBox>
                    {/* <h2>Arguments</h2>
                    <h3>Arg1</h3>
                    <p>Arg1Description</p>
                    <h2>Flags</h2>
                    <h3>-flag</h3>
                    <p>FlagDescription</p>
                    <CodeBox>tpy help -flag</CodeBox>
                    <h2>Example</h2>
                    <CodeBox>tpy help</CodeBox> */}
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

export default helpCommand;
