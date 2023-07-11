import type { FC, HTMLProps } from 'react';
import image from '../../assets/logo.png';

export const Logo: FC<HTMLProps<HTMLImageElement>> = ({ ...rest }) => {
  return (
    <img
      src={image}
      width={180}
      height={40}
      loading='lazy'
      {...rest}
    />
  );
};
