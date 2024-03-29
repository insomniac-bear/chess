import type { FC, HTMLProps } from 'react';

export const SkipArrowIcon: FC<HTMLProps<SVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.5 18V6H7.5V18H5.5ZM18.5 18L9.5 12L18.5 6V18ZM16.5 14.25V9.75L13.1 12L16.5 14.25Z" fill="#EAEAEA"/>
    </svg>
  );
};
