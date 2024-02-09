import './Divider.scss';

function Divider() {
    const width = window.innerWidth;
    const rotate = Math.random() > 0.5 ? -1 : 1;

    return (
        <div
            className="Divider"
            style={{
                width: width,
                transform: `rotate(${rotate}deg)`,
            }}></div>
    );
}
export default Divider;
