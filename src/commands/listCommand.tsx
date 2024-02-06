import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';

function listCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['list']} />
                    <p>
                        List all available templates for this project. The name
                        and the description will be printed for each template.
                        You can use the name for the generate command.
                    </p>
                    <CodeBox>{'tpy list'}</CodeBox>
                    {/* <h2>Arguments</h2>
                    <h3>Arg1</h3>
                    <p>Arg1Description</p>
                    <h2>Flags</h2>
                    <h3>-flag</h3>
                    <p>FlagDescription</p>
                    <CodeBox>tpy list -flag</CodeBox>
                    <h2>Example</h2>
                    <CodeBox>tpy list</CodeBox> */}
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

export default listCommand;
