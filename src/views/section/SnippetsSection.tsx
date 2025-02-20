import FileWindow from '../../components/FileWindow/FileWindow';
import MySection from '../../components/MySection/MySection';

export default function SnippetsSection() {
    return (
        <MySection heading="Snippets">
            <p>
                Snippets over to generate code snippets within existing code
                files when generating a new component. This is a great way to
                save time and ensure consistency in your codebase. Snippets can
                be used to generate boilerplate code for new components, routes,
                or any other code that you find yourself writing repeatedly.
            </p>
            <p>
                <b>Example Use Case:</b> When working on a multi-route React App
                and you need to create a new page, you can use templify to
                create a new component for that route within a new{' '}
                <code>.tsx</code> file. By using snippets you then can then
                automatically register the new route in the <code>App.tsx</code>{' '}
                file.
            </p>
            <FileWindow name=".templates/Page/.templify.yml">
                snippets:
                <br />
                {'  - id: Each Snippet needs a ID to be referenced'}
                <br />
                {'    file: The file to insert the snippet into'}
                <br />
                {'    content: The content of the snippet'}
                <br />
                {
                    '    before: If set to true the snippet will be inserted before the line containing the snippet ID (Default is false)'
                }
                <br />
                {'  - id: Next Snippet...'}
                <br />
                <br />
                <i>Example:</i>
                <br />
                <br />
                path: src/pages/$$route$$$$sub-route$$
                <br />
                snippets:
                <br />
                {'  - id: new-route'}
                <br />
                {'    file: src/App.tsx'}
                <br />
                {
                    "    content: \"    <Route path='/$$route$$$$sub-route$$' component={$$name.pascal$$} />"
                }
                <br />
                {'  - id: new-route-import'}
                <br />
                {'    file: src/App.tsx'}
                <br />
                {'    before: true'}
                <br />
                {
                    "    content: \"import { $$name.pascal$$ } from './pages/$$route$$$$sub-route$$/$$name.pascal$$';"
                }
                <br />
            </FileWindow>
            <p>
                The snippets can the be refernces within the specific file by
                using the snippet ID surrounded by <code>~~</code> (two tildes)
                like so:
                <br />
                <code>~~snippet-id~~</code>
                <br />
                <br />
                <i>Example:</i>
            </p>

            <FileWindow name="src/App.tsx">
                import React from 'react';
                <br />
                {"import {Route} from 'react-router-dom';"}
                <br />
                <br />
                {"import {Home} from './pages/Home/Home';"}
                <br />
                {"import {About} from './pages/About/About';"}
                <br />
                <b>// ~~new-route-import~~</b>
                <br />
                <br />
                <br />
                <br />
                function App() {'{'}
                <br />
                {'  return ('}
                <br />
                {'    <div>'}
                <br />
                <b>{'       // ~~new-route~~'}</b>
                <br />
                {'      <Route path="/about" component={About} />'}
                <br />
                {'      <Route path="/" exact component={Home} />'}
                <br />
                {'    </div>'}
                <br />
                {'  );'}
                <br />
                {'}'}
                <br />
                <br />
                export default App;
            </FileWindow>
        </MySection>
    );
}
