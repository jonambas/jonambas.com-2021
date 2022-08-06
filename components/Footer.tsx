import { FC } from "react";
import { Box } from "@sweatpants/box";

const Footer: FC = () => {
  return (
    <Box as="footer" mt="900" fontSize="10px" color="gray">
      Copyright © 2000–2022 Jon Ambas. All Rights Reserved.
    </Box>
  );
};

export default Footer;
