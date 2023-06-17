import { HTMLProps } from 'react';

export interface IFooterProps extends HTMLProps<HTMLDivElement> {
  footerType: 'anonymous' | 'auth';
}