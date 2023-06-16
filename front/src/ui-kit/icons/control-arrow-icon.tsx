import type { FC, HTMLProps } from 'react';

export const ControlArrowIcon: FC<HTMLProps<SVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 14.3175L18.3818 16L12 9.36493L5.61822 16L4 14.3175L12 6L20 14.3175Z" fill="#EAEAEA"/>
    </svg>
  );
};
