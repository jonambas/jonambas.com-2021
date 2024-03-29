import React from "react";
import NextImage from "next/image";
import { Box } from "@sweatpants/box";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 43%;

  img {
    object-fit: contain !important;
  }
`;

type ImageProps = {
  caption?: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof NextImage>;

function Image(props: ImageProps) {
  const { src, alt = "", caption, ...rest } = props;
  return (
    <Box py="600" gridColumn="1/4">
      <Box as="figure" display="block" m="0" textAlign="left">
        <ImageWrapper>
          <NextImage alt={alt} src={src} layout="fill" {...rest} />
        </ImageWrapper>
        <Box
          as="figcaption"
          display="block"
          textAlign="center"
          mt="200"
          color="gray"
          fontSize="0.8rem"
        >
          {caption}
        </Box>
      </Box>
    </Box>
  );
}

export default Image;
