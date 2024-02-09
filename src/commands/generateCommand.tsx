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
                        in the <code>.templify</code> file.
                    </p>
                    <CodeBox>
                        {'tpy generate <template-name> <new-name> [flags]'}
                    </CodeBox>
                    <h2>Arguments</h2>
                    <h3>template-name</h3>
                    <p>
                        The name of the template you want to use. This is the
                        name of the folder inside the templates folder. You can
                        print all available templates with the <code>list</code>{' '}
                        command.
                    </p>
                    <p>
                        By default the <code>template-name</code> has only to
                        match a template beginning, so that the command can find
                        the correct template (case insensitive).
                    </p>
                    <p>
                        <i>Example</i>: if you have a template named{' '}
                        <code>Component</code>, you can use
                        <code>tpy generate c ... </code> if there are no other
                        templates beginning with <code>c</code>. If there is a
                        template named <code>Container</code> as well, you have
                        to use <code>typ generate com ...</code>.
                    </p>
                    <h3>new-name</h3>
                    <p>
                        The name of the file you want to create. This name will
                        be used to replace the <code>$$name$$</code> placeholder
                        in the template files.
                    </p>
                    <h2>Flags</h2>
                    <h3>-strict</h3>
                    <p>
                        If this flag is set, the <code>template-name</code> has
                        to match exactly the name of the template.
                    </p>
                    <CodeBox>tpy generate Component NavBar -strict</CodeBox>
                    <h3>-dry-run</h3>
                    <p>
                        If this flag is set, the command will not create any
                        files. It will only print the files that would be
                        created.
                    </p>
                    <CodeBox>tpy generate Component NavBar -dry-run</CodeBox>
                    <h2>Example</h2>
                    <p>
                        Generate a new Navbar component in your React project
                        using the <code>Component</code> template and there
                        exists <b>no</b> other template:
                    </p>
                    <CodeBox>tpy generate c Navbar</CodeBox>
                    <p>
                        Generate a new Navbar component in your React project
                        using the <code>Component</code> template but there
                        exists another template named <code>Container</code>:
                    </p>
                    <CodeBox>tpy generate com Navbar</CodeBox>
                    <p>
                        Generate a new Navbar component in your React project
                        using the <code>Component</code> template using the{' '}
                        <code>-strict</code> flag:
                    </p>
                    <CodeBox>tpy generate Component Navbar -strict</CodeBox>
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
