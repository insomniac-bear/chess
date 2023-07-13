import type { MouseEvent } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ICustomInputProps } from './input.props';
import { useState } from 'react';
import styles from './input.module.css';
import { ErrorIcon, VisibilityIcon, VisibilityOffIcon } from '../icons';
import cn from 'classnames';
import { Typography } from '../typography/typography';

const Input = <T extends FieldValues>({
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
  const labelStyles = cn(styles.input, className, { [styles.input_hasError]: error });

  const handleShowPassword = (e: MouseEvent) => {
    // prevent bubbling
    e.stopPropagation();
    setTextIsHidden(isTextHidden ? false : true);
  };

  return (
    <Typography
      as="label"
      typographyType="f-label"
      htmlFor={`${name}-input`}
      title={placeholder}
      className={labelStyles}
    >
      <input
        {...register(name)}
        value={value}
        disabled={disabled}
        type={!isTextHidden ? 'text' : 'password'}
        className={styles.input__field}
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
    </Typography>
  );
};

export default Input;
