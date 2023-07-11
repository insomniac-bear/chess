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
    <label htmlFor={`${name}-input`} title={placeholder} className={cn(styles.input, className, {[styles.input_hasError]: errors})}>
      <input
        value={value}
        disabled={disabled}
        type={'text'}
        className={cn(styles.input__field)}
        ref={ref}
        name={name}
        id={`${name}-input`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={styles.input__placeholder}>{placeholder}</span>
      {errors && <span className={styles.input__errorMessage}>{errors?.message}</span>}
    </label>
  );
});


export default Input;