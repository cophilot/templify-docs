import './MySubHeading.scss';

interface Props {
    parentHeading: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    icons?: string[];
}

/**
 * This is a MySubHeading component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-2-17
 */
function MySubHeading({ children, style, parentHeading, icons = [] }: Props) {
    const urlHeading =
        parentHeading.toString().toLowerCase().replace(/ /g, '-') +
        '-' +
        children!.toString().toLowerCase().replace(/ /g, '-');

    const editUrl = () => {
        const url = window.location.href;
        if (url.endsWith(urlHeading) || url.endsWith(urlHeading + '/')) {
            // remove the heading from the url
            const newUrl = url.replace(urlHeading, '');
            window.location
                ? window.location.assign(newUrl)
                : console.log('No window.location');
            return;
        }
        const hash = url.indexOf('#');
        const newUrl = hash === -1 ? url : url.substring(0, hash);
        const newHash = '/' + urlHeading;
        window.location
            ? window.location.assign(newUrl + '#' + newHash)
            : console.log('No window.location');
    };

    return (
        <h2
            className="MyHeading"
            style={style}
            id={urlHeading}
            onClick={editUrl}>
            {children}
            {icons.map((icon, index) => {
                return <i key={index} className={icon + ' my-icon'}></i>;
            })}
            <i className="bi bi-link-45deg link-icon"></i>
        </h2>
    );
}
export default MySubHeading;
