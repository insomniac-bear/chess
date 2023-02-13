import type { FC } from 'react';
import type { IFigureProps } from './figure.types';

export const Pawn: FC<IFigureProps> = ({ color }) => (
  <svg
    width="57"
    height="70"
    viewBox="0 0 57 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_19_247)">
      <path
        d="M10.085 60C10.0284 59.3197 10 57.9875 10 56.0034C10 48.8605 12.2109 43.5601 16.6327 40.102C17.9365 39.0249 19.5238 38.0329 21.3946 37.1259C19.1837 36.4456 17.6814 34.7733 16.8878 32.1089C16.661 31.2585 16.5476 30.3798 16.5476 29.4728C16.5476 25.6746 18.5034 22.9819 22.415 21.3946C21.3945 19.6939 20.8843 18.0782 20.8844 16.5476C20.8843 13.9966 22.1315 12.0975 24.6259 10.8503C25.7596 10.2835 26.9784 10 28.2824 10C31.1168 10 33.2142 11.1054 34.5748 13.3163C35.1983 14.28 35.5101 15.3572 35.5102 16.5476C35.5101 18.1916 35.0283 19.8073 34.0646 21.3946C36.1621 22.2449 37.6643 23.3787 38.5714 24.7959C39.4784 26.3265 39.9319 27.8855 39.932 29.4728C39.9319 32.4206 38.9115 34.6599 36.8708 36.1905C36.3605 36.644 35.7936 36.9558 35.1701 37.1259C40.3854 39.7903 43.7585 43.2767 45.2891 47.585C46.0827 49.966 46.4795 52.7721 46.4796 56.0034C46.4795 57.9875 46.4512 59.3197 46.3946 60H10.085Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_19_247"
        x="0"
        y="0"
        width="56.4796"
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
          result="effect1_dropShadow_19_247"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_19_247"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
