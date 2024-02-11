import NavBar from '../../components/NavBar/NavBar';
import './AboutView.scss';

function AboutView() {
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="About">
                    <h1>Welcome to About!</h1>
                    {/* TODO Add your content here */}
                </div>
            </div>
        </>
    );
}

export default AboutView;
