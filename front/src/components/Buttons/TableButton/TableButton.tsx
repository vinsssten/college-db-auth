import React, {CSSProperties, FC} from 'react';
import '../CustomButtons.scss';

interface TableButtonProps {
    onClick?: () => void;
    redColor?: boolean;
    endIcon?: JSX.Element;
    style?: CSSProperties;
    children?: any;
}

const TableButton: FC<TableButtonProps> = ({
                                               children,
                                               onClick,
                                               style,
                                               redColor,
                                               endIcon,
                                           }) => {
    return (
        <div
            onClick={e => {
                if (onClick) {
                    e.stopPropagation();
                    onClick();
                }
            }}
            className="tableButton"
            style={{color: redColor ? 'red' : 'none', ...style}}
        >
            {children}
            {endIcon}
        </div>
    );
};

export default TableButton;
