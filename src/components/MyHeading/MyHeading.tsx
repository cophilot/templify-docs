import './MyHeading.scss';

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    icon?: string | null;
}

function MyHeading({ children, style, icon }: Props) {
    const urlHeading = children!.toString().toLowerCase().replace(/ /g, '-');

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
        <h1
            className="MyHeading"
            style={style}
            id={urlHeading}
            onClick={editUrl}>
            {children}
            {icon && <i className={icon}></i>}
            <i className="bi bi-link-45deg link-icon"></i>
        </h1>
    );
}
export default MyHeading;
