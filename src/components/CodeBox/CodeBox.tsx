import { useState } from 'react';
import './CodeBox.scss';
import Shortable from '../Shortable/Shortable';

interface Props {
    children: React.ReactNode;
    shortForm?: string;
}

function CodeBox({ children, shortForm }: Props) {
    const [icon, setIcon] = useState('bi bi-clipboard');

    if (!shortForm) shortForm = children as string;

    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = children as string;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setIcon('bi bi-clipboard-check');
        setTimeout(() => {
            setIcon('bi bi-clipboard');
        }, 2000);
    };

    return (
        <div className="CodeBox">
            <pre>
                <Shortable>{children + '|' + shortForm}</Shortable>
            </pre>
            <i className={icon} onClick={copyToClipboard}></i>
        </div>
    );
}
export default CodeBox;
