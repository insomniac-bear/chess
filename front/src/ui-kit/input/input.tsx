import { FC, MouseEvent, useState } from 'react';
import styles from './input.module.css';
import { ICustomInputProps } from './input.props';
import cn from 'classnames';
import { ErrorIcon, VisibilityIcon, VisibilityOffIcon } from '../icons';
import { FieldValues } from 'react-hook-form';

const Input = <T extends FieldValues> ({
  name,
  onChange,
  onBlur,
  placeholder,
  disabled,
  value,
  error,
  register,
  isConfidential = false,
  className,
}: ICustomInputProps<T>): JSX.Element => {
  const [isTextHidden, setTextIsHidden] = useState<boolean>(isConfidential);

  const handleShowPassword = (e: MouseEvent) => {
    // prevent bubbling
    e.stopPropagation();
    setTextIsHidden(isTextHidden ? false : true);
  };

  return (
    <label
      htmlFor={`${name}-input`}
      title={placeholder}
      className={cn(styles.input, className, { [styles.input_hasError]: error })}
    >
      <input
        {...register(name)}
        value={value}
        disabled={disabled}
        type={!isTextHidden ? 'text' : 'password'}
        className={cn(styles.input__field)}
        name={name}
        id={`${name}-input`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={styles.input__placeholder}>{placeholder}</span>

      {isConfidential && !error && (
        <button
          className={styles.input__showPassBtn}
          onClick={handleShowPassword}
          type="button"
          title={isTextHidden ? 'Показать' : 'Скрыть'}
        >
          {isTextHidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      )}

      {error && <ErrorIcon className={styles.input__errorIcon} />}
      {error && <span className={styles.input__errorMessage}>{error?.message}</span>}
    </label>
  );
};

export default Input;
