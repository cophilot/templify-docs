import './PulseLogo.scss';

function PulseLogo() {
    return (
        <div className="PulseLogo">
            <img
                src="https://raw.githubusercontent.com/cophilot/templify/master/assets/logo.png"
                className="logo back"
                alt=""
            />
            <img
                src="https://raw.githubusercontent.com/cophilot/templify/master/assets/logo.png"
                className="logo front"
                alt=""
            />
        </div>
    );
}
export default PulseLogo;
