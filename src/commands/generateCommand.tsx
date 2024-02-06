import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';

function generateCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['generate']} />
                    <p>
                        Generate new files from a template. This will create new
                        files in your project based on the template you specify.
                        It will generate all files in the structure of the foder
                        of the template. The base path is the path you specified
                        in the <i>.templify</i> file.
                    </p>
                    <CodeBox>
                        {'tpy generate <template-name> <new-name>'}
                    </CodeBox>
                    <h2>Arguments</h2>
                    <h3>template-name</h3>
                    <p>
                        The name of the template you want to use. This is the
                        name of the folder inside the templates folder. You can
                        print all available templates with the <i>list</i>{' '}
                        command.
                    </p>
                    <h3>new-name</h3>
                    <p>
                        The name of the file you want to create. This name will
                        be used to replace the <i>$$name$$</i> placeholder in
                        the template files.
                    </p>
                    {/*                     <h2>Flags</h2>
                    <h3>-flag</h3>
                    <p>FlagDescription</p>
                    <CodeBox>tpy generate -flag</CodeBox>*/}
                    <h2>Example</h2>
                    <p>
                        Generate a new Navbar component in your React project
                        using the <i>Component</i> template:
                    </p>
                    <CodeBox>tpy generate Component Navbar</CodeBox>
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

export default generateCommand;
