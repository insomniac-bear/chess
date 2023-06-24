import styles from './typography.module.css';
import type { ElementType } from 'react';
import type { PolymorphicRef, TTypographyProps } from './typography.props';

import { forwardRef } from 'react';
import cn from 'classnames';

export const Typography = forwardRef(
  <C extends ElementType = 'p'>(
    {
      as,
      children,
      className,
      typographyType = 'text-m',
      ...restProps
    }: TTypographyProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'p';
    const typographyStyles = cn(styles[typographyType], {
      [className ?? '']: className,
    });

    return <Component className={typographyStyles} {...restProps} ref={ref}>{children}</Component>
  }
);
