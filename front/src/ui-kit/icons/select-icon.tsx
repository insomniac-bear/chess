import type { FC, HTMLProps } from 'react';

export const SelectIcon: FC<HTMLProps<SVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.1333 3 19.2583 3.01233 19.375 3.037C19.4917 3.06233 19.6083 3.1 19.725 3.15L17.875 5H5V19H19V12.35L21 10.35V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM11.525 17L5.875 11.35L7.275 9.95L11.525 14.2L20.7 5.025L22.125 6.4L11.525 17Z" fill="#EAEAEA"/>
    </svg>
  );
};
