import {
    useShortForm,
    useToggleShortForm,
} from '../../providers/AppearanceProvider';
import './ShortSwitch.scss';

/**
 * This is a ShortSwitch component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-3-10
 */
function ShortSwitch() {
    const toggleShortForm = useToggleShortForm();
    const getShortForm = useShortForm();

    return (
        <div className="short-switch">
            <label className="switch">
                <input
                    type="checkbox"
                    onChange={toggleShortForm}
                    checked={getShortForm()}
                />
                <span className="slider round"></span>
            </label>
            <p>
                <i>Use short format</i>
            </p>
        </div>
    );
}
export default ShortSwitch;
