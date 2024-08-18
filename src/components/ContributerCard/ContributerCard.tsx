import Contributer from '../../types/Contributer';
import './ContributerCard.scss';

interface ContributerCardProps {
    contributer: Contributer;
}

/**
 * This is a ContributerCard component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-8-18
 */
function ContributerCard({ contributer }: ContributerCardProps) {
    return (
        <a href={contributer.url} target="_blank">
            <div className="contributer-card">
                <img src={contributer.avatar_url} alt="" className="image" />
                <p className="name">{contributer.name}</p>
            </div>
        </a>
    );
}
export default ContributerCard;
