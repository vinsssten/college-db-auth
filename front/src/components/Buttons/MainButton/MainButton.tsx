import React, {FC} from 'react';
import '../CustomButtons.scss';
import cln from 'classnames';

export interface MainButtonProps {
    icon?: React.ReactNode;
    className?: string,
    children: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    disabled?: boolean;

    submit?: boolean;
}

const MainButton: FC<MainButtonProps> = props => {
    return (
        <button
            className={cln('mainButton', props.disabled ? 'mainButton_disabled' : null, props.className)}
            style={props.style}
            onClick={props.disabled ? () => {
            } : props.onClick}
            type={props.submit ? 'submit' : 'button'}
        >
            {props.icon && <div className={'mainButton__icon'}>{props.icon}</div>}
            {props.children}
        </button>
    );
};

export default MainButton;
