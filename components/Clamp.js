import React from "react";
import { Box } from "@sweatpants/box";

function Clamp(props) {
  const { serif, ...rest } = props;
  return (
    <Box
      gridColumn="2/3"
      mt="0"
      mb="400"
      fontFamily={serif ? "serif" : "sans"}
      minWidth="0"
      {...rest}
    >
      {props.children}
    </Box>
  );
}

export default Clamp;
