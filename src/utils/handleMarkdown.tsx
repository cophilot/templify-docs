import Markdown from 'react-markdown';

export function handleMarkdownInlineCode(line: string): JSX.Element {
    return <Markdown>{line}</Markdown>;
}
