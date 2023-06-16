import type { FC, HTMLProps } from 'react';

export const SettingsIcon: FC<HTMLProps<SVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.24995 22L8.84995 18.8C8.63329 18.7167 8.42928 18.6167 8.23795 18.5C8.04595 18.3833 7.85828 18.2583 7.67495 18.125L4.69995 19.375L1.94995 14.625L4.52495 12.675C4.50828 12.5583 4.49995 12.4457 4.49995 12.337V11.662C4.49995 11.554 4.50828 11.4417 4.52495 11.325L1.94995 9.375L4.69995 4.625L7.67495 5.875C7.85828 5.74167 8.04995 5.61667 8.24995 5.5C8.44995 5.38333 8.64995 5.28333 8.84995 5.2L9.24995 2H14.75L15.15 5.2C15.3666 5.28333 15.571 5.38333 15.763 5.5C15.9543 5.61667 16.1416 5.74167 16.325 5.875L19.2999 4.625L22.0499 9.375L19.475 11.325C19.4916 11.4417 19.5 11.554 19.5 11.662V12.337C19.5 12.4457 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1416 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.24995ZM12.05 15.5C13.0166 15.5 13.8416 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8416 8.84167 13.0166 8.5 12.05 8.5C11.0666 8.5 10.2373 8.84167 9.56195 9.525C8.88729 10.2083 8.54995 11.0333 8.54995 12C8.54995 12.9667 8.88729 13.7917 9.56195 14.475C10.2373 15.1583 11.0666 15.5 12.05 15.5ZM12.05 13.5C11.6333 13.5 11.2793 13.354 10.988 13.062C10.696 12.7707 10.55 12.4167 10.55 12C10.55 11.5833 10.696 11.2293 10.988 10.938C11.2793 10.646 11.6333 10.5 12.05 10.5C12.4666 10.5 12.821 10.646 13.113 10.938C13.4043 11.2293 13.55 11.5833 13.55 12C13.55 12.4167 13.4043 12.7707 13.113 13.062C12.821 13.354 12.4666 13.5 12.05 13.5ZM11 20H12.975L13.325 17.35C13.8416 17.2167 14.321 17.0207 14.763 16.762C15.2043 16.504 15.6083 16.1917 15.975 15.825L18.45 16.85L19.4249 15.15L17.275 13.525C17.3583 13.2917 17.4166 13.0457 17.45 12.787C17.4833 12.529 17.5 12.2667 17.5 12C17.5 11.7333 17.4833 11.4707 17.45 11.212C17.4166 10.954 17.3583 10.7083 17.275 10.475L19.4249 8.85L18.45 7.15L15.975 8.2C15.6083 7.81667 15.2043 7.49567 14.763 7.237C14.321 6.979 13.8416 6.78333 13.325 6.65L13 4H11.025L10.675 6.65C10.1583 6.78333 9.67928 6.979 9.23795 7.237C8.79595 7.49567 8.39162 7.80833 8.02495 8.175L5.54995 7.15L4.57495 8.85L6.72495 10.45C6.64162 10.7 6.58328 10.95 6.54995 11.2C6.51662 11.45 6.49995 11.7167 6.49995 12C6.49995 12.2667 6.51662 12.525 6.54995 12.775C6.58328 13.025 6.64162 13.275 6.72495 13.525L4.57495 15.15L5.54995 16.85L8.02495 15.8C8.39162 16.1833 8.79595 16.504 9.23795 16.762C9.67928 17.0207 10.1583 17.2167 10.675 17.35L11 20Z" fill="#EAEAEA"/>
    </svg>
  );
};
