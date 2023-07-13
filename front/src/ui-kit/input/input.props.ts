import { HTMLProps } from 'react';
import { Path, UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';


export interface ICustomInputProps<T extends FieldValues> extends HTMLProps<HTMLInputElement> {
  name: Path<T>;
  error: FieldErrors;
  placeholder?: string;
  disabled?: boolean;
  register: UseFormRegister<T>
  isConfidential?: boolean
}