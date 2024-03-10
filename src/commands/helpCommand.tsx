import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';
import ShortSwitch from '../components/ShortSwitch/ShortSwitch';

function helpCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['help']} />
                    <ShortSwitch></ShortSwitch>
                    <p>Open the help center.</p>
                    <CodeBox shortForm="tpy h [command]">
                        tpy help [command]
                    </CodeBox>
                    <h2>Arguments</h2>
                    <h3>command</h3>
                    <p>
                        The name of the command you want to get help for. If no
                        command is specified, the help center will open.
                    </p>
                    {/* <h2>Flags</h2>
                    <h3>-flag</h3>
                    <p>FlagDescription</p>
                    <CodeBox>tpy help -flag</CodeBox> */}
                    <h2>Example</h2>
                    <p>Get help for the generate command:</p>
                    <CodeBox shortForm="tpy h g">tpy help generate</CodeBox>
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
