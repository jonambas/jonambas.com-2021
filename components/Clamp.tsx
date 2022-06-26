import React from "react";
import { Box, BoxProps } from "@sweatpants/box";

type ClampProps = {
  serif?: boolean;
} & Omit<BoxProps<"div">, "color">;

function Clamp(props: ClampProps) {
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
