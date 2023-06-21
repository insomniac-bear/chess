import { ChangeEvent } from 'react';
import { FieldError } from 'react-hook-form';


export interface ICustomInputProps {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  className?: string;
  errors?: FieldError;
}