import styles from './sign-up.module.css';
import type { FC } from 'react';
import type { InferType } from 'yup';
import type { SubmitHandler } from 'react-hook-form';

import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Logo } from '../../ui-kit/logo/logo';
import { Typography } from '../../ui-kit/typography/typography';
import { Button } from '../../ui-kit/button/button';
import { Input } from '../../ui-kit/input/input';
import { MAIL_REG_EX } from '../../const/reg-ex';
import { ValidationErrors } from '../../const/error-messages';
import { useForm } from 'react-hook-form';
import { useSignupMutation } from '../../store/slices/api/auth.api';
import { setCookie } from '../../util/cookie';

const schema = object({
  name: string()
    .trim()
    .required(ValidationErrors.FIELD_EMPTY)
    .min(3, ValidationErrors.USERNAME_SHORT)
    .max(30, ValidationErrors.USERNAME_LONG),
  email: string()
    .trim()
    .required(ValidationErrors.FIELD_EMPTY)
    .min(7, ValidationErrors.EMAIL_SHORT)
    .max(97, ValidationErrors.EMAIL_LONG)
    .matches(MAIL_REG_EX, ValidationErrors.EMAIL_INCORRECT)
    .test(
      'email',
      ValidationErrors.EMAIL_INCORRECT,
      (value) => {
        const secondPart = value.split('@')[1];
        if (secondPart === undefined) return false;
        return secondPart.length < 65;
      }
    ),
    password: string()
    .required(ValidationErrors.FIELD_EMPTY)
    .min(8, ValidationErrors.PASSWORD_SHORT)
    .max(128, ValidationErrors.PASSWORD_LONG)
    .notOneOf([ref('email'), undefined], ValidationErrors.PASSWORD_MATCH_EMAIL),
});

type TForm = InferType<typeof schema>;

export const SignUpPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({ reValidateMode: 'onChange', resolver: yupResolver(schema) });

  const [ signUp, { isLoading: isSignupLoading } ] = useSignupMutation();

  const formHandler: SubmitHandler<TForm> = (data) => {
    signUp(data)
      .unwrap()
      .then((data) => {
        setCookie('access', data.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <main className={styles.main}>
      <Logo />
      <form className={styles.form} onSubmit={handleSubmit(formHandler)}>
        <Typography as='h2' typographyType='h2' className={styles.title}>Регистрация</Typography>
        <Typography as='p' typographyType='text-s' className={styles.description}>Есть аккаунт? <Button as='link' btnType='text' className={styles.link}>Войти</Button></Typography>
        <fieldset className={styles.fields}>
          <Input
            name='name'
            placeholder='Логин'
            error={errors}
            register={register}
          />
          <Input
            name='email'
            placeholder='Email'
            error={errors}
            register={register}
          />
          <Input
            name='password'
            isConfidential
            placeholder='Пароль'
            error={errors}
            register={register}
          />
        </fieldset>
        <Button
          className={styles.submit}
          as='button'
          btnType='primary'
          type='submit'
          disabled={isSignupLoading}
        >
          Создать аккаунт
        </Button>
      </form>
    </main>
  );
};
