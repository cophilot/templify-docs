import { useEffect, useState } from 'react';
import './AnimatedCommandBox.scss';

interface Props {
    allCommands: string[];
}

function AnimatedCommandBox({ allCommands }: Props) {
    const [text, setText] = useState<string>('');
    const [commandIndex, setCommandIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [fullStateCounter, setFullStateCounter] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(updateText, 150);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charIndex, isDeleting, fullStateCounter]);

    const updateText = () => {
        const newText =
            'tpy ' + allCommands[commandIndex].substring(0, charIndex);
        setText(newText);

        if (isDeleting) {
            if (charIndex > 0) {
                setCharIndex(charIndex - 1);
                return;
            }
            setIsDeleting(false);
            setCommandIndex((commandIndex + 1) % allCommands.length);
            return;
        }

        if (charIndex < allCommands[commandIndex].length) {
            setCharIndex(charIndex + 1);
            return;
        }

        if (fullStateCounter >= 10) {
            setIsDeleting(true);
            setFullStateCounter(0);
            return;
        }
        setFullStateCounter(fullStateCounter + 1);
    };

    return (
        <div className="AnimatedCommandBox">
            <h1>{text}</h1>
            <div className="cursor"></div>
        </div>
    );
}
export default AnimatedCommandBox;
