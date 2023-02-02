import React from 'react';

export type StandartHTMLInputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export interface TextInputCustomInputProps {
    className?: string;
}

export interface TextInputProps extends StandartHTMLInputProps {
    className?: string;
    label?: string;
    error?: string | null;

    EndIcon?: JSX.Element;
    renderCustomInput?: (props: TextInputCustomInputProps, id: string) => React.ReactNode;
}
