import type { FC, HTMLProps } from 'react';

export const RepeatIcon: FC<HTMLProps<SVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 22L3 18L7 14L8.4 15.45L6.85 17H17V13H19V19H6.85L8.4 20.55L7 22ZM5 11V5H17.15L15.6 3.45L17 2L21 6L17 10L15.6 8.55L17.15 7H7V11H5Z" fill="#EAEAEA"/>
    </svg>
  );
};
