import styles from './sign-up.module.css';
import type { FC } from 'react';
import type { InferType } from 'yup';
import type { SubmitHandler } from 'react-hook-form';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Logo } from '../../ui-kit/logo/logo';
import { Typography } from '../../ui-kit/typography/typography';
import { Button } from '../../ui-kit/button/button';
import { Input } from '../../ui-kit/input/input';
import { MAIL_REG_EX } from '../../const/reg-ex';
import { ValidationErrors } from '../../const/error-messages';
import { useSignupMutation } from '../../store/slices/api/auth.api';
import { setCookie } from '../../util/cookie';
import { schema } from './schema';
import { Navigate } from 'react-router-dom';
import { Paths } from '../../const/paths';

type TForm = InferType<typeof schema>;

export const SignUpPage: FC = () => {
  const [errMessage, setErrMessage] = useState<null | string>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({ reValidateMode: 'onChange', resolver: yupResolver(schema) });

  const [ signUp, { isLoading: isSignupLoading, isSuccess: isSignupSuccess } ] = useSignupMutation();

  const formHandler: SubmitHandler<TForm> = (data) => {
    signUp(data)
      .unwrap()
      .then((data) => {
        setCookie('access', data.access_token);
      })
      .catch((err) => {
        setErrMessage(err.data.message);
      });
  }
  return (
    <section className={styles.main}>
      <Logo />
      <form className={styles.form} onSubmit={handleSubmit(formHandler)}>
        <Typography as='h2' typographyType='h2' className={styles.title}>Регистрация</Typography>
        <Typography as='p' typographyType='text-s' className={styles.description}>Есть аккаунт? <Button as='link' btnType='text' className={styles.link}>Войти</Button></Typography>
        {
          errMessage !== null &&
          <Typography as='p' typographyType='text-s' className={styles.error}>{errMessage}</Typography>
        }
        <fieldset className={styles.fields}>
          <Input
            name='name'
            placeholder='Логин'
            errors={errors}
            register={register}
          />
          <Input
            name='email'
            placeholder='Email'
            errors={errors}
            register={register}
          />
          <Input
            name='password'
            isConfidential
            placeholder='Пароль'
            errors={errors}
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
      {
        isSignupSuccess &&
        <Navigate to={Paths.LK} />
      }
    </section>
  );
};
