import { FC, forwardRef, LegacyRef } from 'react';
import styles from './input.module.css'; 
import { ICustomInputProps } from './input.props';
import cn from 'classnames';

const Input: FC<ICustomInputProps> = forwardRef(({
  name,
  onChange,
  onBlur,
  placeholder,
  disabled,
  value,
  errors,
  className,
}, ref: LegacyRef<HTMLInputElement>) => {
  return (
    <label htmlFor={`${name}Input`} className={cn(styles.wrapper, className)}>
      <input
        value={value}
        disabled={disabled}
        type={'text'}
        className={cn(styles.input)}
        ref={ref}
        name={name}
        id={`${name}Input`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && <span className={styles.message}>{errors?.message}</span>}
    </label>
  );
});


export default Input;