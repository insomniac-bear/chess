import styles from './main.module.css';
import type { FC } from 'react';
import { Header } from '../../components/header/header';
import { Typography } from '../../ui-kit/typography/typography';
import { Button } from '../../ui-kit/button/button';
import author_1 from '../../assets/author-1.jpg';
import author_2 from '../../assets/author-2.jpg';
import author_3 from '../../assets/author-3.jpg';
import { Author } from '../../components/author/author';

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
        <section className={styles.authors}>
          <Typography
            className={styles.authors_title}
            as='h2'
            typographyType='h2'
          >
            Авторы проекта
          </Typography>
          <Typography
            className={styles.authors_notion}
            as='p'
            typographyType='text-m'
          >
            Приложение создано командой любителей игры в шахматы для тех, кто интересуется этой захватывающей игрой.
          </Typography>
          <ul className={styles.authors_list}>
            <li>
              <Author
                imgUrl={author_1}
                name='Иванов Иван'
                role='разработка'
              />
            </li>
            <li>
              <Author
                imgUrl={author_2}
                name='Петров Пётр'
                role='вёрстка'
              />
            </li>
            <li>
              <Author
                imgUrl={author_3}
                name='Сидоров Семён'
                role='дизайн'
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
