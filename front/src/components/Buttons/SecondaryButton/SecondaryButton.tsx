import React, {FC, ReactNode} from 'react';
import '../CustomButtons.scss';

export interface SecondaryButtonProps {
    icon?: React.ReactNode;
    children: ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const SecondaryButton: FC<SecondaryButtonProps> = props => {
    return (
        <div className="secondaryButton" style={props.style} onClick={props.onClick}>
            {props.icon}
            <span className="secondaryButton_text">{props.children}</span>
        </div>
    );
};

export default SecondaryButton;
