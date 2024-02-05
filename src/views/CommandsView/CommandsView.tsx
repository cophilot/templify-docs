import { useNavigate } from 'react-router-dom';
import AnimatedCommandBox from '../../components/AnimatedCommandBox/AnimatedCommandBox';
import NavBar from '../../components/NavBar/NavBar';
import './CommandsView.scss';

function CommandsView() {
    const allCommands = [
        'help',
        'version',
        'update',
        'init',
        'new',
        'list',
        'load',
        'generate',
    ];

    const navigate = useNavigate();

    return (
        <>
            <NavBar></NavBar>
            <div className="content">
                <div className="Commands">
                    <AnimatedCommandBox
                        allCommands={allCommands}></AnimatedCommandBox>
                    <div className="command-box">
                        {allCommands.map((command, index) => {
                            return (
                                <button
                                    key={index}
                                    className="command"
                                    onClick={() => {
                                        navigate(`/command/${command}`);
                                    }}>
                                    {command}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommandsView;
