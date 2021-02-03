import React from "react";

const ArrowLeftIcon = React.forwardRef(function ArrowLeftIcon(props, userRef) {
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
      <path d="M1.5 7.5l4-4m-4 4l4 4m-4-4H14" stroke="currentColor"></path>
    </svg>
  );
});

export default ArrowLeftIcon;
