import styles from './header.module.css';
import type { FC } from 'react';
import { Logo } from '../../ui-kit/logo/logo';
import { Button } from '../../ui-kit/button/button';
import { Paths } from '../../const/paths';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.menu}>
        <li><Button btnType='secondary'>Вход</Button></li>
        <li><Button as='link' to={Paths.SIGN_UP} btnType='primary'>Регистрация</Button></li>
      </ul>
    </header>
  );
};
