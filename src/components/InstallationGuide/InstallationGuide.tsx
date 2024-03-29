import CodeBox from '../CodeBox/CodeBox';
import MySection from '../MySection/MySection';
import MySubHeading from '../MySubHeading/MySubHeading';
import './InstallationGuide.scss';

/**
 * This is a InstallationGuide component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-2-29
 */
function InstallationGuide() {
    const isWindows = () => {
        const platform = window.navigator.platform;
        const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

        if (windowsPlatforms.indexOf(platform) !== -1) {
            return true;
        }
        return false;
    };

    const windowsGuide = (
        <>
            <MySubHeading parentHeading="Installation">Windows</MySubHeading>
            <ol>
                <li>
                    Download the <code>tpy.exe</code> binary from the{' '}
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
            <p>
                After installation run <code>tpy version</code> to verify that
                the installation was successful.
            </p>
        </>
    );

    return (
        <MySection heading="Installation">
            {isWindows() && windowsGuide}
            <MySubHeading parentHeading="Installation">
                macOS & Linux
            </MySubHeading>
            <p>
                Run the following command in your terminal to isntall the latest
                version of templify:
            </p>
            <CodeBox divider="§">
                curl -s
                https://raw.githubusercontent.com/cophilot/templify/master/install
                | bash -s -- -y
            </CodeBox>
            <p>
                Optionally you can specify a version with the <code>-v</code>{' '}
                flag:
            </p>
            <CodeBox divider="§">
                {
                    'curl -s https://raw.githubusercontent.com/cophilot/templify/master/install | bash -s -- -y -v <version>'
                }
            </CodeBox>
            <p>
                You can also define the installation path with the
                <code>-p</code> flag:
            </p>
            <CodeBox divider="§">
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
                    You may need to restart your terminal after installation for
                    the changes to take effect.
                </i>
            </p>
            <p>
                After installation run <code>tpy version</code> to verify that
                the installation was successful.
            </p>
            {!isWindows() && windowsGuide}
            <MySubHeading parentHeading="Installation">
                Development
            </MySubHeading>
            <p>
                <b>1.</b> Clone the repository and navigate into the folder:
            </p>
            <CodeBox divider="§">
                {
                    'git clone https://github.com/cophilot/templify.git && cd templify'
                }
            </CodeBox>
            <p>
                <b>2.</b> Run the setup script:
            </p>
            <CodeBox divider="§">{'./scripts/setup'}</CodeBox>
            <p>
                <b>3.</b> Now you can run templify in development mode with:
            </p>
            <CodeBox divider="§">{'cargo run <command> --dev'}</CodeBox>
        </MySection>
    );
}
export default InstallationGuide;
