import { ChangeEvent, HTMLProps } from 'react';
import { FieldError, Path, UseFormRegister, FieldValues } from 'react-hook-form';


export interface ICustomInputProps<T extends FieldValues> extends HTMLProps<HTMLInputElement> {
  name: Path<T>;
  error: FieldError | undefined;
  placeholder?: string;
  disabled?: boolean;
  register: UseFormRegister<T>
  isConfidential?: boolean
}