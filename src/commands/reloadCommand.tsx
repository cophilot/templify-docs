import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';

function reloadCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['reload']} />
                    <p>
                        Reload a specific or all templates. This command will
                        reload the templates from the
                        <code>.source</code> attribute in the{' '}
                        <code>.templify</code> file.
                    </p>
                    <CodeBox>{'tpy reload [template-name] [flags]'}</CodeBox>
                    <h2>Arguments</h2>
                    <h3>template-name</h3>
                    <p>
                        The name of the template you want to reload. If not
                        provided, all templates that have a source will be
                        reloaded.
                    </p>
                    <h2>Flags</h2>
                    <h3>-strict</h3>
                    <p>
                        If this flag is provided, the command will only reload
                        the specified template. If the template does not exist,
                        an error will be thrown.
                    </p>
                    <CodeBox>tpy reload Component -strict</CodeBox>
                    <h2>Example</h2>
                    <p>
                        The Component template in the remote repository has
                        changed and you want to reload it:
                    </p>
                    <CodeBox>tpy reload comp</CodeBox>
                    <p>
                        Update all templates that have a source in the{' '}
                        <code>.templify</code> file:
                    </p>
                    <CodeBox>tpy reload</CodeBox>
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

export default reloadCommand;
