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

    return (
        <>
            <NavBar></NavBar>
            <div className="content">
                <div className="Commands">
                    <AnimatedCommandBox
                        allCommands={allCommands}></AnimatedCommandBox>
                </div>
            </div>
        </>
    );
}

export default CommandsView;
