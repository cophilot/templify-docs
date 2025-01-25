import { useEffect, useState } from 'react';
import './WhatsNew.scss';
import { handleMarkdownInlineCode } from '../../utils/handleMarkdown';

/**
 * This is a WhatsNew component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-3-9
 */
function WhatsNew() {
    const [data, setData] = useState<JSX.Element[]>([<i>...</i>]);

    useEffect(() => {
        fetch(
            'https://api.github.com/repos/cophilot/templify/releases/latest'
        ).then((response) => {
            response.json().then((data) => {
                const newData: JSX.Element[] = [];
                for (let line of data.body.split('\n')) {
                    line.trim();
                    if (line.startsWith('-')) {
                        line = line.substring(1).trim();
                    }
                    if (line === '' || line.startsWith('-')) {
                        continue;
                    }
                    newData.push(handleMarkdownInlineCode(line));
                }
                setData(newData);
            });
        });
    }, []);

    return (
        <ul className="whats-new">
            {data.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
        </ul>
    );
}
export default WhatsNew;
