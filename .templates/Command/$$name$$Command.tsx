import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';
import ShortSwitch from '../components/ShortSwitch/ShortSwitch';

function $$name$$Command() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['$$name$$']} />
                    <ShortSwitch></ShortSwitch>
                    <p>Description</p>
                    <CodeBox>{'tpy $$name$$'}</CodeBox>
                    <h2>Arguments</h2>
                    <h3>Arg1</h3>
                    <p>Arg1Description</p>
                    <h2>Flags</h2>
                    <h3>-flag</h3>
                    <p>FlagDescription</p>
                    <CodeBox>tpy $$name$$ -flag</CodeBox>
                    <h2>Example</h2>
                    <CodeBox>tpy $$name$$</CodeBox>
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

export default $$name$$Command;
