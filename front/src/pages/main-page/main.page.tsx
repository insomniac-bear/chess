import styles from './main.module.css';
import type { FC } from 'react';
import { Header } from '../../components/header/header';
import { Typography } from '../../ui-kit/typography/typography';
import { Button } from '../../ui-kit/button/button';

export const MainPage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <Typography
            className={styles.title}
            as='h1'
            typographyType='h1'
          >
            Приложение для игры в шахматы on-line
          </Typography>
          <Typography
            className={styles.notion}
            as='p'
            typographyType='text-m'
          >
            Играйте с вашими друзьями из любого уголка мира.
          </Typography>
          <Button btnType='primary' className={styles.button}>Зарегистрироваться</Button>
        </section>
      </main>
    </>
  );
};
