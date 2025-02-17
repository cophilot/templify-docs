import CodeBox from '../../components/CodeBox/CodeBox';
import MySection from '../../components/MySection/MySection';
import MySubHeading from '../../components/MySubHeading/MySubHeading';

export default function DevelopmentSection() {
    return (
        <MySection heading="Development">
            <p>
                It is very welcome to contribute to this project. The following
                sections will guide you through on how to become a contributor.
            </p>
            <MySubHeading parentHeading="Development">Tech Stack</MySubHeading>
            <p>
                templify is written in <b>Rust 1.82.0</b> 🦀.
            </p>
            <MySubHeading parentHeading="Development">
                Finding Issues
            </MySubHeading>
            <p>
                If you want to contribute but don't know where to start, you can
                look at the{' '}
                <a
                    href="https://github.com/cophilot/templify/issues"
                    target="_blank">
                    issues
                </a>{' '}
                page. There you can find issues that are up for grabs. If you
                find an issue that you want to work on, please comment on the
                issue that you are working on it.
            </p>
            <MySubHeading parentHeading="Development">
                Installation
            </MySubHeading>
            <p>
                <b>1.</b> Clone the repository and navigate into the folder:
            </p>
            <CodeBox divider="§">
                {
                    'git clone https://github.com/cophilot/templify.git templify && cd templify'
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
            <MySubHeading parentHeading="Development">Scripts</MySubHeading>
            <p>
                Their are several predefined <code>scripts</code> for testing
                the code. They can be found in the .scripts directory and can be
                run with:
            </p>
            <CodeBox divider="§">{'./.scripts/<script-name>'}</CodeBox>
            <ul>
                <li>
                    <code>comment-check</code>: Checks if the code has enough
                    comments.
                </li>
                <li>
                    <code>format</code>: Formats the code.
                </li>
                <li>
                    <code>format-check</code>: Checks if the code is formatted
                    correctly.
                </li>
                <li>
                    <code>lint</code>: Runs the linter.
                </li>
                <li>
                    <code>setup</code>: Sets up the project for development.
                </li>
                <li>
                    <code>test</code>: Runs the tests.
                </li>
            </ul>
            <MySubHeading parentHeading="Development">CI Pipeline</MySubHeading>
            <p>
                On a push or pull request to the dev branch the CI pipeline will
                run. The pipeline consists of the following steps:
            </p>
            <ol>
                <li>Checks the formatting of the code.</li>
                <li>Checks if enough comments are present.</li>
                <li>Run the linter.</li>
                <li>Runs the tests.</li>
            </ol>
            <MySubHeading parentHeading="Development">
                Pull Requests
            </MySubHeading>
            <p>
                When creating a pull request please make sure to follow the
                following guidelines:
            </p>
            <ul>
                <li>Set the target branch to dev</li>
                <li>
                    Add a description of the changes Link the issue that is
                    being solved
                </li>
                <li>
                    <i>(if applicable)</i> Make sure the CI pipeline passes
                </li>
            </ul>
        </MySection>
    );
}
