import AnimatedCommandBox from '../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../components/NavBar/NavBar';
import './command.scss';
import '../index.scss';
import CodeBox from '../components/CodeBox/CodeBox';
import { Link } from 'react-router-dom';
import ShortSwitch from '../components/ShortSwitch/ShortSwitch';
import Shortable from '../components/Shortable/Shortable';

function reloadCommand() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="command-container">
                    <AnimatedCommandBox allCommands={['reload']} />
                    <ShortSwitch></ShortSwitch>
                    <p>
                        Reload a specific or all templates. This command will
                        reload the templates from the
                        <code>.source</code> attribute in the{' '}
                        <code>.templify</code> file.
                    </p>
                    <CodeBox shortForm="tpy rl [template-name] [flags]">
                        {'tpy reload [template-name] [flags]'}
                    </CodeBox>
                    <h2>Arguments</h2>
                    <h3>template-name</h3>
                    <p>
                        The name of the template you want to reload. If not
                        provided, all templates that have a source will be
                        reloaded.
                    </p>
                    <p>
                        <i>
                            The template-name follows the{' '}
                            <Link to="/template-name-matching">
                                Template Name Matching
                            </Link>{' '}
                            rules.
                        </i>
                    </p>
                    <h2>Flags</h2>
                    <h3>
                        <Shortable>-reset|-r</Shortable>
                    </h3>
                    <p>
                        If this flag is set, the template will be deleted and
                        then reloaded from the source. That means all changes
                        you made to the template will be lost and the template
                        will be reset to the source.
                    </p>
                    <CodeBox shortForm="tpy rl Component -r">
                        tpy reload Component -reset
                    </CodeBox>
                    <h3>-strict</h3>
                    <p>
                        If this flag is set, the <code>template-name</code> has
                        to match exactly the name of the template and will not
                        follow the{' '}
                        <Link to="/template-name-matching">
                            {' '}
                            Template Naming Matching
                        </Link>
                        . If the template does not exist, an error will be
                        thrown.
                    </p>
                    <CodeBox shortForm="tpy rl Component -strict">
                        tpy reload Component -strict
                    </CodeBox>
                    <h2>Example</h2>
                    <p>
                        The Component template in the remote repository has
                        changed and you want to reload it:
                    </p>
                    <CodeBox shortForm="tpy rl comp">tpy reload comp</CodeBox>
                    <p>
                        Reset all templates that have a source in the{' '}
                        <code>.templify</code> file:
                    </p>
                    <CodeBox shortForm="tpy rl -r">tpy reload -reset</CodeBox>
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
