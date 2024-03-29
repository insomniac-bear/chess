import type { FC, HTMLProps } from 'react';

export const BarChartIcon: FC<HTMLProps<SVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 20V9H8V20H4ZM10 20V4H14V20H10ZM16 20V13H20V20H16Z" fill="#EAEAEA"/>
    </svg>
  );
};
