import './Divider.scss';
import { useState } from 'react';

interface Props {
    style?: React.CSSProperties;
}

function Divider({ style }: Props) {
    const [width] = useState(window.innerWidth);
    const deg = [-1, 0, 1];
    const [rotate] = useState(deg[Math.floor(Math.random() * deg.length)]);

    return (
        <div
            className="Divider"
            style={{
                width: width,
                transform: `rotate(${rotate}deg)`,
                ...style,
            }}></div>
    );
}
export default Divider;
