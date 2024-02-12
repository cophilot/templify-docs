import './FileWindow.scss';

interface Props {
    children: React.ReactNode;
    name: string;
}

function FileWindow({ children, name }: Props) {
    return (
        <div className="FileWindow">
            <div className="title-bar">{name}</div>
            <div className="file-content">
                <pre>{children}</pre>
            </div>
        </div>
    );
}
export default FileWindow;
