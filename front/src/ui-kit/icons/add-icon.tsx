import type { FC, HTMLProps } from 'react';

export const AddIcon: FC<HTMLProps<SVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#EAEAEA"/>
    </svg>
  );
};
