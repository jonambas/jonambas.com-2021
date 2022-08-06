import type { ComponentType } from "react";
import { Box, BoxProps } from "@sweatpants/box";

type ClampProps = {
  serif?: boolean;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  color?: BoxProps["color"];
} & Omit<BoxProps<"div">, "color" | "as">;

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
