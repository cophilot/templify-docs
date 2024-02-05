import { useNavigate } from 'react-router-dom';
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
        </div>
    );
}
export default NavBar;
