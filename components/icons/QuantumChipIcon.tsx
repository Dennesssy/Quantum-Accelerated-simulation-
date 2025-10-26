
import React from 'react';

export const QuantumChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2.5a9.5 9.5 0 1 0 0 19a9.5 9.5 0 0 0 0-19Z" />
    <path d="M12 8.5v7" />
    <path d="M15.5 12h-7" />
    <path d="M12 2.5V1M12 23v-1.5M1 12h1.5M21.5 12H23" />
    <path d="m4.22 4.22 1.065 1.065m13.43 13.43-1.065-1.065" />
    <path d="m18.715 4.22-1.065 1.065M5.285 19.78l1.065-1.065" />
  </svg>
);
