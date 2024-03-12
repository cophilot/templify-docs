import { useShortForm } from '../../providers/AppearanceProvider';
import './Shortable.scss';

interface Props {
    children: React.ReactNode;
    divider?: string;
}

/**
 * This is a Shortable component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-3-10
 */
function Shortable({ children, divider = '|' }: Props) {
    const isShortForm = useShortForm();

    if (children === undefined || children === null) return null;

    const pieces = children.toString().split(divider);

    const longForm = pieces[0];
    const shortForm = pieces[1] || longForm;

    return (
        <span className="shortable">
            {isShortForm() ? shortForm : longForm}
        </span>
    );
}
export default Shortable;
