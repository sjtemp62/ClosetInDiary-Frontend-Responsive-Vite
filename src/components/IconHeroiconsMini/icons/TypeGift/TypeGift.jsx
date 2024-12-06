/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TypeGift = ({ className }) => {
  return (
    <svg
      className={`type-gift ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.0002 6C14.314 5.58217 14.5 5.0628 14.5 4.5C14.5 3.11929 13.3807 2 12 2C11.1822 2 10.4561 2.39267 10 2.99976C9.54389 2.39267 8.8178 2 8 2C6.61929 2 5.5 3.11929 5.5 4.5C5.5 5.0628 5.68597 5.58217 5.99982 6H3.25C2.55964 6 2 6.55964 2 7.25V7.75C2 8.44036 2.55964 9 3.25 9H9.25V6H10.75V9H16.75C17.4404 9 18 8.44036 18 7.75V7.25C18 6.55964 17.4404 6 16.75 6H14.0002ZM13 4.5C13 5.05228 12.5523 5.5 12 5.5H11L11 4.5C11 3.94772 11.4477 3.5 12 3.5C12.5523 3.5 13 3.94772 13 4.5ZM7 4.5C7 5.05228 7.44772 5.5 8 5.5H9V4.5C9 3.94772 8.55228 3.5 8 3.5C7.44772 3.5 7 3.94772 7 4.5Z"
        fill="#626262"
        fillRule="evenodd"
      />

      <path
        className="path"
        d="M9.25 10.5H3V15.25C3 16.7688 4.23122 18 5.75 18H9.25V10.5Z"
        fill="#626262"
      />

      <path
        className="path"
        d="M10.75 18V10.5H17V15.25C17 16.7688 15.7688 18 14.25 18H10.75Z"
        fill="#626262"
      />
    </svg>
  );
};
