import { Link, useNavigate } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../assets/logo.png';

function NavBar() {
    const navigate = useNavigate();

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
            <div className="navbar-links">
                <Link className="navbar-link" to="/command">
                    Commands
                </Link>
                {/*   <Link className="navbar-link" to="/vault">
                    Vault
                </Link> */}
            </div>
        </div>
    );
}
export default NavBar;
