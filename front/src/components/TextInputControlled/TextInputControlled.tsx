import React, {ReactNode} from 'react';
import {useController} from 'react-hook-form';
import TextInput from '../TextInput/TextInput';
import {ControllerRenderProps} from 'react-hook-form/dist/types/controller';
import {IControlledInputCommonProps} from "../../lib/types/utilityTypes";

interface TextInputControlledProps<T extends {}> extends IControlledInputCommonProps<T> {
    customInput?: (
        props: ControllerRenderProps & { className?: string; id: string },
    ) => ReactNode;
}

const TextInputControlled = <T extends {}>({
                                               control,
                                               name,
                                               rules,
                                               ...restProps
                                           }: TextInputControlledProps<T>) => {
    const {field, fieldState} = useController({
        name,
        control,
        rules,
    });

    return (
        <TextInput
            {...field}
            error={fieldState.error?.message}
            {...restProps}
            renderCustomInput={({ className }, id) =>
                restProps.customInput?.({ ...field, className, id })
            }
        />
    );
};

export default TextInputControlled;
