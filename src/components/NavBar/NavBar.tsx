import { useNavigate } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="NavBar">
            <img
                src="src/assets/logo.png"
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
