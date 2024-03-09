export function handleMarkdownInlineCode(line: string): JSX.Element {
    const elements = line.split('`');

    let isCode = line.startsWith('`');

    return (
        <>
            {elements.map((element, index) => {
                if (!isCode) {
                    isCode = true;
                    return <span key={index}>{element}</span>;
                } else {
                    isCode = false;
                    return (
                        <code key={index} className="inline-code">
                            {element}
                        </code>
                    );
                }
            })}
        </>
    );
}
