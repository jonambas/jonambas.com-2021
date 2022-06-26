import React from "react";

const ArrowRightIcon = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithRef<"svg">
>(function ArrowRightIcon(props, userRef) {
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
      <path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor"></path>
    </svg>
  );
});

export default ArrowRightIcon;
