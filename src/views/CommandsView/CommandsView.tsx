import NavBar from '../../components/NavBar/NavBar';
import './CommandsView.scss';

function CommandsView() {
    return (
        <>
            <NavBar></NavBar>
            <div className="content">
                <div className="Commands">
                    <h1>Welcome to Commands!</h1>
                    {/* Add your content here */}
                </div>
            </div>
        </>
    );
}

export default CommandsView;
