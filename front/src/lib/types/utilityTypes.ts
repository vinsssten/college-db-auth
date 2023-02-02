import {Control, FieldValues, ValidationRule} from 'react-hook-form';
import {FieldPath} from 'react-hook-form/dist/types';

export interface IControlledInputCommonProps<T extends FieldValues> {
    control: Control<T, any>;
    name: FieldPath<T>;
    rules?: ValidationRule<any>;
    label?: string;
}
