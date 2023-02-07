import type { FC } from 'react';
import type { IFigureProps } from './figure.types';

export const Rook: FC<IFigureProps> = ({ color }) => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_26_10)">
      <path
        d="M11.8962 60L10 58.3705V52.2813L20.0798 43.705V26.6381L12.2954 20.0343V12.4014L15.0898 10H22.1757L23.9721 11.458V13.6021H27.7645V11.458L29.4611 10H40.5389L42.2355 11.458V13.6021H46.028V11.458L47.7246 10H54.9102L57.7046 12.4014V20.0343L49.9202 26.6381V43.705L60 52.2813V58.3705L58.004 60H11.8962ZM23.6727 41.7324V44.6484H46.3274V41.7324H23.6727ZM23.6727 26.295V29.211H46.3274V26.295H23.6727Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_26_10"
        x="0"
        y="0"
        width="70"
        height="70"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_26_10"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_26_10"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);