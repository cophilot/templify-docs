import { useEffect, useState } from 'react';
import PulseLogo from '../../components/PulseLogo/PulseLogo';
import './HomeView.scss';
import NavBar from '../../components/NavBar/NavBar';
import Divider from '../../components/Divider/Divider';
import { useParams } from 'react-router-dom';
import MySection from '../../components/MySection/MySection';
import CodeBox from '../../components/CodeBox/CodeBox';

function HomeView() {
    const [version, setVersion] = useState<string>('loading...');

    useEffect(() => {
        fetch(
            'https://api.github.com/repos/cophilot/templify/releases/latest'
        ).then((response) => {
            response.json().then((data) => {
                setVersion('v' + data.tag_name);
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
                        {version}
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
                    <Divider></Divider>
                    <MySection heading="Installation">
                        <h2>Linux</h2>
                        <p>
                            Run the following command in your terminal to
                            isntall the latest version of templify:
                        </p>
                        <CodeBox>
                            curl -s
                            https://raw.githubusercontent.com/cophilot/templify/master/install
                            | bash -s -- -y
                        </CodeBox>
                        <p>
                            Optionally you can specify a version with the{' '}
                            <code>-v</code> flag:
                        </p>
                        <CodeBox>
                            {
                                'curl -s https://raw.githubusercontent.com/cophilot/templify/master/install | bash -s -- -y -v <version>'
                            }
                        </CodeBox>
                        <p>
                            You can also define the installation path with the
                            <code>-p</code> flag:
                        </p>
                        <CodeBox>
                            {
                                'curl -s https://raw.githubusercontent.com/cophilot/templify/master/install | bash -s -- -y -p <path>'
                            }
                        </CodeBox>
                        <p>
                            or download the binary from the{' '}
                            <a
                                href="https://github.com/cophilot/templify/releases/latest"
                                target="_blank">
                                latest release
                            </a>{' '}
                            and place it in your <code>$PATH</code>.
                        </p>
                        <p>
                            <i>
                                You may need to restart your terminal after
                                installation for the changes to take effect.
                            </i>
                        </p>
                        <h2>Windows</h2>
                        <ol>
                            <li>
                                Download the <code>tpy.exe</code> binary from
                                the{' '}
                                <a
                                    href="https://github.com/cophilot/templify/releases/latest"
                                    target="_blank">
                                    latest release
                                </a>
                            </li>
                            <li>
                                Create a root folder for templify, e.g.
                                <code>C:\Program Files\templify</code>
                            </li>
                            <li>
                                Inside the root folder create a folder called
                                <code>bin</code>
                            </li>
                            <li>
                                Place the <code>tpy.exe</code> binary inside the{' '}
                                <code>bin</code> folder
                            </li>
                            <li>
                                Add the bin folder to your system's{' '}
                                <a
                                    href="https://medium.com/@kevinmarkvi/how-to-add-executables-to-your-path-in-windows-5ffa4ce61a53"
                                    target="_blank">
                                    PATH variable
                                </a>
                            </li>
                        </ol>
                    </MySection>
                    <Divider></Divider>
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
