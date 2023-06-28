import type { HTMLProps } from 'react';

export interface IAuthorProps extends HTMLProps<HTMLDivElement> {
  imgUrl: string;
  name: string;
  role: string;
}
