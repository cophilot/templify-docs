import { useEffect, useState } from 'react';
import PulseLogo from '../../components/PulseLogo/PulseLogo';
import './HomeView.scss';
import NavBar from '../../components/NavBar/NavBar';
import Divider from '../../components/Divider/Divider';
import { Link, useParams } from 'react-router-dom';
import MySection from '../../components/MySection/MySection';
import FileWindow from '../../components/FileWindow/FileWindow';
import MySubHeading from '../../components/MySubHeading/MySubHeading';
import InstallationGuide from '../../components/InstallationGuide/InstallationGuide';
import WhatsNew from '../../components/WhatsNew/WhatsNew';
import ContributerSection from '../../components/ContributerSection';

function HomeView() {
    const [version, setVersion] = useState<string>('Loading...');

    useEffect(() => {
        fetch(
            'https://api.github.com/repos/cophilot/templify/releases/latest'
        ).then((response) => {
            response.json().then((data) => {
                setVersion(data.tag_name);
            });
        });
    }, []);

    const { section } = useParams();
    if (section) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 0,
                behavior: 'smooth',
            });
        }
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="content">
                <div className="Home">
                    <PulseLogo></PulseLogo>

                    <h1>templify</h1>
                    <a
                        className="version-label"
                        href="https://github.com/cophilot/templify/releases/latest"
                        target="_blank">
                        {'v' + version}
                    </a>

                    <p className="">
                        templify is a CLI tool to keep track of templates and
                        generate files from them.
                    </p>

                    <a
                        href="https://github.com/cophilot/templify"
                        target="_blank">
                        <i className="bi bi-github icon"></i>
                    </a>
                    <p className="">
                        by{' '}
                        <a href="https://philipp-bonin.com/" target="_blank">
                            Philipp B.
                        </a>
                    </p>
                    <Divider
                        style={{
                            marginTop: '300px',
                        }}></Divider>
                    <MySection>
                        <p>
                            Working on a project often requires the creation of
                            files with a similar structure. For example, a React
                            component often consists of a <code>.tsx</code>{' '}
                            file, a <code>.css</code> file and a{' '}
                            <code>.test.tsx</code> file. templify allows you to
                            create templates for such files and generate them
                            from the command line in a matter of seconds so you
                            can focus on the important stuff.
                        </p>
                    </MySection>
                    <Divider />
                    <MySection>
                        <ul
                            style={{
                                fontWeight: 'bold',
                            }}>
                            <li>
                                <Link to="/whats-new">What's new</Link>
                            </li>
                            <li>
                                <Link to="/installation">Installation</Link>
                            </li>
                            <ul>
                                <li>
                                    <Link to="/installation-macos-&-linux">
                                        macOS & Linux
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/installation-windows">
                                        Windows
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/installation-development">
                                        Development
                                    </Link>
                                </li>
                            </ul>
                            <li>
                                <Link to="/structure">Structure</Link>
                            </li>
                            <li>
                                <Link to="/templates">Templates</Link>
                            </li>
                            <li>
                                <Link to="/.templify">.templify</Link>
                            </li>
                            <li>
                                <Link to="/placeholders">Placeholders</Link>
                            </li>
                            <ul>
                                <li>
                                    <Link to="/placeholders-case-conversion">
                                        Case conversion
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/placeholders-variable-placeholders">
                                        Variable Placeholders
                                    </Link>
                                </li>
                            </ul>
                            <li>
                                <Link to="/template-name-matching">
                                    Template Name Matching
                                </Link>
                            </li>
                            <li>
                                <Link to="/global-flags">Global Flags</Link>
                            </li>
                            <li>
                                <Link to="/versioning">Versioning</Link>
                            </li>
                        </ul>
                    </MySection>
                    <Divider />
                    <MySection heading="What's new">
                        <p>
                            <i>
                                Whats new in version <b>{version}</b> ?
                            </i>
                        </p>
                        <WhatsNew />
                    </MySection>
                    <Divider />
                    <InstallationGuide></InstallationGuide>
                    <Divider />
                    <MySection heading="Structure">
                        <p>
                            The <code>.templates</code> directory is the heart
                            of templify. It contains all your templates. You can
                            create it by running <code>tpy init</code> in your
                            project's root directory. You can also create it
                            manually.
                        </p>
                    </MySection>
                    <Divider />

                    <MySection heading="Templates">
                        <p>
                            A template is a folder in the{' '}
                            <code>.templates</code> directory of your project.
                            It contains all files and subfolders that should be
                            used when generating a file from the template. You
                            can create a new template by running{' '}
                            <code>{'tpy new <template-name>'}</code>. This will
                            create a new empty template in the{' '}
                            <code>.templates</code> directory, which you can
                            fill with files and subfolders you want to use when
                            generating a file from the template.
                        </p>
                    </MySection>

                    <Divider />
                    <MySection heading=".templify">
                        <p>
                            The <code>.templify</code> file is a file that
                            contains configuration options for a template. It is
                            located in the root of a template folder. It is a
                            simple key-value file. The following keys are
                            supported:
                        </p>
                        <ul>
                            <li>
                                <code>description</code> - A description of the
                                template
                            </li>
                            <li>
                                <code>path</code> - The path where the file
                                should be generated based on the project root
                            </li>
                        </ul>
                        <FileWindow name=".templates/Component/.templify">
                            # This file is used by templify to generate new
                            files from this template. <br /># You can use the
                            following variables in this file: <br />
                            # description:The description of the template <br />
                            # path:The path of the template <br />
                            <br />
                            description:A default template for a new
                            react-component <br />
                            path:src/components/$$name$$
                        </FileWindow>
                        <p>
                            <b>
                                Lines starting with <code>.</code> are
                                auto-generated and should not be edited
                                manually!
                            </b>
                        </p>
                        <p>
                            <i>
                                Lines starting with <code>#</code> are comments
                            </i>
                        </p>
                    </MySection>
                    <Divider />
                    <MySection heading="Placeholders">
                        <p>
                            Placeholders are used to create dynamic templates.
                            They are defined by a <code>$$</code> prefix and
                            suffix. When generating a file from a template,
                            placeholders are replaced with the desired values.
                            The following placeholders are supported:
                        </p>
                        <ul>
                            <li>
                                <code>$$name$$</code> - The name you want to
                                give the file. Will be provided as an argument
                                in the <code>generate</code> command.
                                <i>
                                    Supports{' '}
                                    <Link to="placeholders-case-conversion">
                                        Case conversion
                                    </Link>
                                </i>
                            </li>
                            <li>
                                <code>$$git-name$$</code> - The name of the
                                current git user stored in the global git
                                configuration (
                                <i>
                                    <code>unknown</code> if not set
                                </i>
                                )
                            </li>
                            <li>
                                <code>$$year$$</code> - The current year
                            </li>
                            <li>
                                <code>$$month$$</code> - The current month as a
                                number
                            </li>
                            <li>
                                <code>$$month-name$$</code> - The current month
                                as the name
                            </li>
                            <li>
                                <code>$$day$$</code> - The current day
                            </li>
                        </ul>
                        <p>
                            <i>
                                You can use placeholders also in the{' '}
                                <code>.templify</code> file.
                            </i>
                        </p>
                        <MySubHeading parentHeading="Placeholders">
                            Case conversion
                        </MySubHeading>

                        <p>
                            Case conversion is used to convert placeholders to
                            different case styles. You can use them by adding a
                            <code>.</code> and the case style to a placeholder
                            that supports case conversion (inside the{' '}
                            <code>$$</code>).
                        </p>
                        <p>
                            <i>
                                Example: <code>$$name.kebab$$</code>
                            </i>
                        </p>
                        <p>You can use the following case conversion:</p>
                        <ul>
                            <li>
                                <code>{'$$<placeholder>.lower$$'}</code>: Lower
                                case (e.g. <code>myfirstcomponent</code>)
                            </li>
                            <li>
                                <code>{'$$<placeholder>.upper$$'}</code>: Upper
                                case (e.g. <code>MYFIRSTCOMPONENT</code>)
                            </li>
                            <li>
                                <code>{'$$<placeholder>.camel$$'}</code>: Camel
                                case (e.g. <code>myFirstComponent</code>)
                            </li>
                            <li>
                                <code>{'$$<placeholder>.snake$$'}</code>: Snake
                                case (e.g. <code>my_first_component</code>)
                            </li>
                            <li>
                                <code>{'$$<placeholder>.kebab$$'}</code>: Kebab
                                case (e.g. <code>my-first-component</code>)
                            </li>
                            <li>
                                <code>{'$$<placeholder>.pascal$$'}</code>:
                                Pascal case (e.g. <code>MyFirstComponent</code>)
                            </li>
                            <li>
                                <code>{'$$<placeholder>.macro$$'}</code>: Macro
                                case (e.g. <code>MY_FIRST_COMPONENT</code>)
                            </li>
                            <li>
                                <code>{'$$<placeholder>.train$$'}</code>: Train
                                case (e.g. <code>My-First-Component</code>)
                            </li>
                        </ul>
                        <MySubHeading parentHeading="Placeholders">
                            Variable Placeholders
                        </MySubHeading>
                        <p>
                            You can also define your own placeholders in the{' '}
                            <code>.templify</code> file. You can use them in the
                            same way as the predefined placeholders. To define a
                            variable placeholder, add a new line to the{' '}
                            <code>.templify</code> file with the following
                            structure:
                        </p>

                        <FileWindow name=".templates/Component/.templify">
                            ...
                            <br />
                            <br />
                            # Variable Placeholder
                            <br />
                            {'var:<var-name>'}
                            <br />
                            # Example:
                            <br />
                            var:package
                            <br />
                            <br />
                            # Variable Placeholder with default value
                            <br />
                            {'var:<var-name>(<default-value>)'}
                            <br />
                            # Example:
                            <br />
                            var:subdir(src)
                            <br />
                            <br />
                            # Variable Placeholder with options
                            <br />
                            {
                                'var:<var-name>[<option1-value>,<option2-value>...]'
                            }
                            <br />
                            # Example:
                            <br />
                            var:project[frontend,backend]
                            <br />
                            <br />
                            # You can use them as regular placeholders
                            <br />
                            path:$$project$$/$$subdir$$/$$package.kebab$$/$$name.pascal$$
                            <br />
                            <br />
                            ...
                        </FileWindow>
                        <p>
                            The value for the variable placeholder will be
                            prompted when generating a file from the template.
                        </p>
                        <p>
                            You can also specify the values with the{' '}
                            <code>-var</code> flag when running the{' '}
                            <code>generate</code> command. The flag has to be
                            followed by a comma-separated list of values in the
                            format <code>var-name=value</code>.
                        </p>
                        <p>
                            <b>Example:</b>
                        </p>

                        <p>
                            <i>
                                When running the following command with the
                                example <code>.templify</code> file above:
                            </i>
                        </p>
                        <p>
                            <code>
                                tpy generate Component new-component -var
                                project=frontend,subdir=components,package=myPackage
                            </code>
                        </p>
                        <p>
                            <i>
                                Will generate the file in the following path:{' '}
                            </i>
                            <code>
                                frontend/components/my-package/NewComponent
                            </code>
                        </p>
                    </MySection>
                    <Divider />
                    <MySection heading="Template Name Matching">
                        <p>
                            For some commands you have to specify a template
                            name. To avoid having to type the full name of the
                            template, templify supports{' '}
                            <b>template name matching</b>. This means that you
                            can type only the first few letters of the template
                            name, as long as it is unique and templify will find
                            the correct template (<i>case-insensitive</i>).
                        </p>
                        <p>
                            <b>Example</b>: If you only have a template called{' '}
                            <code>Component</code> you can type <code>c</code>{' '}
                            instead of <code>Component</code> because it is
                            unique. If you have an additional template called{' '}
                            <code>Container</code> you have to type at least{' '}
                            <code>com</code> to make it unique.
                        </p>
                    </MySection>

                    <Divider />
                    <MySection heading="Global Flags">
                        <p>
                            Global flags are flags that can be used with every
                            command. They are prefixed with two dashes (
                            <code>--</code>). The following global flags are
                            supported:
                        </p>
                        <ul>
                            <li>
                                <code>--dev</code> - Run templify in development
                                mode
                            </li>
                            <li>
                                <code>--quiet</code> - Suppress all output
                            </li>
                            <li>
                                <code>--log-file {'<value>'}</code> - Specify a
                                log file where the output should be written to
                            </li>
                        </ul>
                    </MySection>
                    <Divider />
                    <MySection heading="Versioning">
                        <p>
                            Currently, templify is in version{' '}
                            <a
                                href="https://github.com/cophilot/templify/releases/latest"
                                target="_blank">
                                {version}
                            </a>
                        </p>
                        <p>
                            Run <code>tpy version</code> to check the installed
                            version of templify. Run <code>tpy update</code> to
                            update to the latest version or run{' '}
                            <code>tpy update -version x.x.x</code> to update to
                            a specific version.
                        </p>
                        <p>
                            The number of the version is structured as{' '}
                            <code>MAJOR.MINOR.PATCH</code> and is incremented
                            based on the following rules:
                        </p>
                        <ul>
                            <li>
                                <b>Major</b> - breaking changes, new features,
                                improvements that change the behavior of the
                                tool fundamentally. When updating to a new major
                                version, you might have to adjust your templates
                                or commands to work with the new version
                            </li>
                            <li>
                                <b>Minor</b> - new features, new commands and
                                improvement changes that adds functionality to
                                the tool but it can still be used the same way
                            </li>
                            <li>
                                <b>Patch</b> - bug fixes, refactoring, flag
                                added or anything that doesn't change the
                                behavior of the tool
                            </li>
                        </ul>
                    </MySection>
                    <Divider />
                    <MySection heading="Contributers">
                        <p>
                            Special thanks to the following people for their
                            contributions to templify 🙌:
                        </p>
                        <ContributerSection />
                    </MySection>
                    <Divider />
                    <MySection>
                        <p>
                            <b>Thank you for using templify!</b>
                        </p>
                    </MySection>
                    <Divider />
                    <MySection>
                        <p
                            style={{
                                opacity: 0.5,
                            }}>
                            For any questions, feedback or feature requests,
                            please contact{' '}
                            <a
                                href={
                                    'mailto:info@philipp-bonin.com?subject=templify@' +
                                    version
                                }>
                                info@philipp-bonin.com
                            </a>{' '}
                            or open an{' '}
                            <a
                                href="https://github.com/cophilot/templify/issues"
                                target="_blank">
                                issue
                            </a>{' '}
                            on GitHub.
                        </p>
                    </MySection>
                </div>
            </div>
        </>
    );
}

export default HomeView;
