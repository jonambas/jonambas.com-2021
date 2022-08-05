import React from "react";

const LinkIcon = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithRef<"svg">
>(function LinkIcon(props, userRef) {
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
        d="M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6"
        stroke="currentColor"
      />
    </svg>
  );
});

export default LinkIcon;
