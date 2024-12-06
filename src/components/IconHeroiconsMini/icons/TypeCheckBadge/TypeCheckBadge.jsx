/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TypeCheckBadge = ({ className }) => {
  return (
    <svg
      className={`type-check-badge ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M16.4032 12.6523C17.353 12.1487 18 11.1499 18 10C18 8.85007 17.353 7.85126 16.4032 7.34771C16.7188 6.32002 16.47 5.15625 15.6569 4.34312C14.8437 3.53 13.68 3.28122 12.6523 3.59679C12.1487 2.64698 11.1499 2 10 2C8.85007 2 7.85125 2.64699 7.3477 3.59681C6.32002 3.28126 5.15627 3.53004 4.34315 4.34316C3.53003 5.15628 3.28125 6.32003 3.5968 7.34771C2.64699 7.85126 2 8.85007 2 10C2 11.1499 2.64699 12.1487 3.59681 12.6523C3.28124 13.68 3.53001 14.8437 4.34314 15.6569C5.15627 16.47 6.32003 16.7188 7.34771 16.4032C7.85126 17.353 8.85007 18 10 18C11.1499 18 12.1488 17.353 12.6523 16.4032C13.68 16.7187 14.8437 16.47 15.6569 15.6568C16.47 14.8437 16.7188 13.68 16.4032 12.6523ZM13.8566 8.19113C14.1002 7.85614 14.0261 7.38708 13.6911 7.14345C13.3561 6.89982 12.8871 6.97388 12.6434 7.30887L9.15969 12.099L7.28033 10.2197C6.98744 9.92678 6.51256 9.92678 6.21967 10.2197C5.92678 10.5126 5.92678 10.9874 6.21967 11.2803L8.71967 13.7803C8.87477 13.9354 9.08999 14.0149 9.30867 13.9977C9.52734 13.9805 9.72754 13.8685 9.85655 13.6911L13.8566 8.19113Z"
        fill="#626262"
        fillRule="evenodd"
      />
    </svg>
  );
};