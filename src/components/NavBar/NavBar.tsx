import { Link, useNavigate } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../assets/logo.png';

function NavBar() {
    const navigate = useNavigate();

    const toggleMenu = () => {
        const menu = document.querySelector('.navbar-links');
        if (menu === null) {
            return;
        }

        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menu.classList.add('inactive');
        } else {
            menu.classList.remove('inactive');
            menu.classList.add('active');
        }
    };

    return (
        <div className="NavBar">
            <img
                src={logo}
                className="navbar-logo"
                alt="t"
                onClick={() => {
                    navigate('/');
                }}
            />
            <div
                className="burger-menu"
                onClick={() => {
                    toggleMenu();
                }}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="navbar-links inactive">
                <Link className="navbar-link" to="/">
                    Home
                </Link>

                <Link className="navbar-link" to="/command">
                    Commands
                </Link>
                {/*                 <Link className="navbar-link" to="/command">
                    Vault
                </Link>*/}
                <a
                    className="navbar-link"
                    href="https://github.com/cophilot/templify-vault"
                    target="_blank">
                    Vault
                </a>
                <a
                    className="navbar-link"
                    href="https://github.com/cophilot/templify/releases"
                    target="_blank">
                    Releases
                </a>
                {/*   <Link className="navbar-link" to="/vault">
                    Vault
                </Link> */}
            </div>
        </div>
    );
}
export default NavBar;
