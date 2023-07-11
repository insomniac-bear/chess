import { FC, forwardRef, LegacyRef, MouseEvent, useState } from 'react';
import styles from './input.module.css';
import { ICustomInputProps } from './input.props';
import cn from 'classnames';
import { ErrorIcon, VisibilityIcon, VisibilityOffIcon } from '../icons';

const Input: FC<ICustomInputProps> = forwardRef(
  (
    { name, onChange, onBlur, placeholder, disabled, value, errors, isConfidential = false, className },
    ref: LegacyRef<HTMLInputElement>,
  ) => {
    const [isTextHidden, setTextIsHidden] = useState<boolean>(isConfidential);

    const handleShowPassword = (e: MouseEvent) => {
      // prevent bubbling 
      e.stopPropagation();
      setTextIsHidden(isTextHidden ? false : true)
    }

    return (
      <label
        htmlFor={`${name}-input`}
        title={placeholder}
        className={cn(styles.input, className, { [styles.input_hasError]: errors })}
      >
        <input
          value={value}
          disabled={disabled}
          type={!isTextHidden ? 'text' : 'password'}
          className={cn(styles.input__field)}
          ref={ref}
          name={name}
          id={`${name}-input`}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className={styles.input__placeholder}>{placeholder}</span>

        {isConfidential && !errors && (
          <button
            className={styles.input__showPassBtn}
            onClick={handleShowPassword}
            type="button"
            title={isTextHidden ? 'Показать' : 'Скрыть'}
          >
            {isTextHidden ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        )}

        {errors && <ErrorIcon className={styles.input__errorIcon} />}
        {errors && <span className={styles.input__errorMessage}>{errors?.message}</span>}
      </label>
    );
  },
);

export default Input;
