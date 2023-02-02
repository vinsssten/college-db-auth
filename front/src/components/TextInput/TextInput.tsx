import React, {forwardRef, useId} from 'react';
import cln from 'classnames';
import './TextInput.scss';
import {TextInputProps} from './TextInput.types';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({EndIcon, className, label, error, renderCustomInput, ...props}, ref) => {
        const id = useId();

        return (
            <div
                className={cln(
                    'textInput-container',
                    className,
                    error && 'textInput-container--error ',
                )}
            >
                {renderCustomInput?.(
                    {
                        className: 'textInput_input',
                    },
                    id,
                ) ?? (
                    <input
                        className="textInput_input"
                        id={id}
                        placeholder={' '}
                        ref={ref}
                        {...props}
                    />
                )}
                <label className="textInput_label" htmlFor={id}>
                    {label}
                </label>

                {EndIcon && <div className="textInput_end-icon">{EndIcon}</div>}

                <p className="textInput-text textInput_error ">{error}</p>
            </div>
        );
    },
);

export default TextInput;
