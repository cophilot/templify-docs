import './MySection.scss';
import MyHeading from '../MyHeading/MyHeading';

interface Props {
    heading?: string;
    children: React.ReactNode;
}

function MySection({ heading, children }: Props) {
    return (
        <div className="MySection">
            {heading && <MyHeading>{heading}</MyHeading>}
            {children}
        </div>
    );
}
export default MySection;
