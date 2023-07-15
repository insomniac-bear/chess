import type { MouseEvent, ReactNode } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ICustomInputProps } from './input.props';
import { useState } from 'react';
import styles from './input.module.css';
import { ErrorIcon, VisibilityIcon, VisibilityOffIcon } from '../icons';
import cn from 'classnames';
import { Typography } from '../typography/typography';

export const Input = <T extends FieldValues>({
  name,
  placeholder,
  disabled,
  errors,
  register,
  isConfidential = false,
  className,
}: ICustomInputProps<T>): JSX.Element => {
  const [isTextHidden, setTextIsHidden] = useState<boolean>(isConfidential);
  const labelStyles = cn(styles.input, className, {
    [styles.input_hasError]: errors[name],
  });

  const handleShowPassword = (e: MouseEvent) => {
    // prevent bubbling
    e.stopPropagation();
    setTextIsHidden(isTextHidden ? false : true);
  };

  return (
    <Typography
      as="label"
      typographyType="f-label"
      title={placeholder}
      className={labelStyles}
    >
      <input
        {...register(name)}
        disabled={disabled}
        type={!isTextHidden ? 'text' : 'password'}
        className={styles.input__field}
        name={name}
        placeholder={placeholder}
      />
      <span className={styles.input__placeholder}>{placeholder}</span>

      {isConfidential && !errors[name] && (
        <button
          className={styles.input__showPassBtn}
          onClick={handleShowPassword}
          type="button"
          title={isTextHidden ? 'Показать' : 'Скрыть'}
        >
          {isTextHidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      )}

      {errors[name] && <ErrorIcon className={styles.input__errorIcon} />}
      {errors[name] && <span className={styles.input__errorMessage}>{errors[name]?.message?.toString()}</span>}
    </Typography>
  );
};

