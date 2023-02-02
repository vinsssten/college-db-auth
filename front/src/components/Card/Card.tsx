import React, {CSSProperties, FC} from 'react';
import './Card.scss';
import cln from 'classnames';

export interface CardProps {
    title?: string;

    children?: any;

    className?: string;
    style?: CSSProperties;
    contentClassname?: string;
    rightPadding?: boolean;
}

const Card: FC<CardProps> = ({
                                 title,
                                 style,
                                 children,
                                 className,
                                 contentClassname,
                                 ...props
                             }) => {
    return (
        <div
            className={cln(
                className,
                'card',
                props.rightPadding && 'card--right-padding',
            )}
            style={style}
        >
            {title && <div className={'card__title'}>{title}</div>}
            <div className={cln('card__content', contentClassname)}>{children}</div>
        </div>
    );
};

export default Card;
