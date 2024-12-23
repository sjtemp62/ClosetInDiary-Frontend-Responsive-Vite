/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TypeChartPie = ({ className }) => {
  return (
    <svg
      className={`type-chart-pie ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 9.00003C11.4477 9.00003 11 8.55232 11 8.00003V3.00003C11 2.44775 11.4503 1.99253 11.997 2.0705C15.0651 2.50801 17.492 4.93492 17.9295 8.003C18.0075 8.54976 17.5523 9.00003 17 9.00003H12Z"
        fill="#626262"
      />

      <path
        className="path"
        d="M8.00297 4.0705C8.54972 3.99253 9 4.44775 9 5.00003V10C9 10.5523 9.44772 11 10 11H15C15.5523 11 16.0075 11.4503 15.9295 11.9971C15.4456 15.3908 12.5275 18 9 18C5.13401 18 2 14.866 2 11C2 7.47253 4.60923 4.55445 8.00297 4.0705Z"
        fill="#626262"
      />
    </svg>
  );
};
