import React, {FC, MouseEvent} from 'react';
import './RoundButton.scss';

interface RoundButtonProps {
    children?: React.ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const RoundButton: FC<RoundButtonProps> = ({children, onClick}) => {
    return (
        <button className="roundButton" onClick={onClick}>
            {children}
        </button>
    );
};

export default RoundButton;
