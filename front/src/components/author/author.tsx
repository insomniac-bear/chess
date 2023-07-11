import styles from './author.module.css';
import type { FC } from 'react';
import type { IAuthorProps } from './author.props';

import { Typography } from '../../ui-kit/typography/typography';

export const Author: FC<IAuthorProps> = ({ imgUrl, name, role }) => {
  return (
    <figure className={styles.author}>
      <img
        className={styles.author_photo}
        src={imgUrl}
        width={80}
        height={80}
        alt={name}
      />
      <figcaption className={styles.author_subscription}>
        <Typography
          className={styles.author_name}
          as='h3'
          typographyType='text-l'
        >
          {name}
        </Typography>
        <Typography
          className={styles.author_role}
          as='p'
          typographyType='text-m'
        >
          {role}
        </Typography>
      </figcaption>
    </figure>
  );
};
