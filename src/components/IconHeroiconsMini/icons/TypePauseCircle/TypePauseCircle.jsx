/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TypePauseCircle = ({ className }) => {
  return (
    <svg
      className={`type-pause-circle ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM7 7.75C7 7.33579 7.33579 7 7.75 7H8.25C8.66421 7 9 7.33579 9 7.75V12.25C9 12.6642 8.66421 13 8.25 13H7.75C7.33579 13 7 12.6642 7 12.25V7.75ZM11 7.75C11 7.33579 11.3358 7 11.75 7H12.25C12.6642 7 13 7.33579 13 7.75V12.25C13 12.6642 12.6642 13 12.25 13H11.75C11.3358 13 11 12.6642 11 12.25V7.75Z"
        fill="#626262"
        fillRule="evenodd"
      />
    </svg>
  );
};
