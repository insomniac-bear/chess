import styles from './footer.module.css';
import type { FC } from 'react';

import cn from 'classnames';

import type { IFooterProps } from './footer.props';
import { Typography } from '../../ui-kit/typography/typography';

export const Footer: FC<IFooterProps> = ({ footerType }) => {
  const footerStyle = cn(styles.footer, {
    [styles[footerType] ?? '']: footerType,
  });
  return (
    <footer className={footerStyle}>
      <Typography as='h2' typographyType='text-m' className={styles.title}>
        Шахматы © 2023
      </Typography>
    </footer>
  );
}