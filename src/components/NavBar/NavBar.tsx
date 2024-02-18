import { Link, useNavigate } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../assets/logo.png';
import { useState } from 'react';

function NavBar() {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        const menu = document.querySelector('.navbar-links');
        if (menu === null) {
            return;
        }

        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menu.classList.add('inactive');
            setActive(false);
        } else {
            menu.classList.remove('inactive');
            menu.classList.add('active');
            setActive(true);
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
            {!active && (
                <div
                    className="burger-menu"
                    onClick={() => {
                        toggleMenu();
                    }}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            )}
            {active && (
                <div
                    className="burger-menu-cross"
                    onClick={() => {
                        toggleMenu();
                    }}>
                    <i className="bi bi-x-lg"></i>
                </div>
            )}
            <div className="navbar-links inactive">
                <Link className="navbar-link" to="/">
                    Home
                </Link>

                <Link className="navbar-link" to="/command">
                    Commands
                </Link>
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
                <Link className="navbar-link install-btn" to="/installation">
                    Install
                </Link>
            </div>
        </div>
    );
}
export default NavBar;
