import React from "react";

const DownloadIcon = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithRef<"svg">
>(function DocumentIcon(props, userRef) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      ref={userRef}
      {...props}
    >
      <path
        d="M7.5 10.5l-3.25-3m3.25 3l3-3m-3 3V1m6 6v6.5h-12V7"
        stroke="currentColor"
      ></path>
    </svg>
  );
});

export default DownloadIcon;
