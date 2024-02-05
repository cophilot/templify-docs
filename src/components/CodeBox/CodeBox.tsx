import { useState } from 'react';
import './CodeBox.scss';

interface Props {
    children: React.ReactNode;
}

function CodeBox({ children }: Props) {
    const [icon, setIcon] = useState('bi bi-clipboard');

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
            <pre>{children}</pre>
            <i className={icon} onClick={copyToClipboard}></i>
        </div>
    );
}
export default CodeBox;
