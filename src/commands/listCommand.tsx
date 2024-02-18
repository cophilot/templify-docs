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
                        List all available templates for this project. By
                        default the name and the description will be printed for
                        each template.
                    </p>
                    <CodeBox>{'tpy list [flags]'}</CodeBox>
                    {/*                     <h2>Arguments</h2>
                    <h3>Arg1</h3>
                    <p>Arg1Description</p>
                    */}
                    <h2>Flags</h2>
                    <h3>-name</h3>
                    <p>
                        Print only the name of the templates and not the
                        description.
                    </p>
                    <CodeBox>tpy list -name</CodeBox>
                    <h3>-path</h3>
                    <p>
                        Print the path for the template that is saved in the
                        <code>.templify</code> file as well.
                    </p>
                    <CodeBox>tpy list -path</CodeBox>
                    <h2>Example</h2>
                    <p>
                        Print all names of the available templates in this
                        project with their paths:
                    </p>
                    <CodeBox>tpy list -name -path</CodeBox>
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
