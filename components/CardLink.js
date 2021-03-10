import React from "react";
import Box from "@sweatpants/box";
import Stack from "@sweatpants/stack";
import Link from "next/link";
import styled from "styled-components";

const StyledWrapper = styled(Box)`
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  transition: 0.15s;
  height: 100%;

  &:hover,
  a:focus &,
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.blue};
    border: ${({ theme }) => theme.borders.cardHover};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.lighterBlue};
  }
`;

const CardLink = React.forwardRef(function CardLink(props, userRef) {
  const {
    children,
    href,
    type = "internal",
    icon: Icon,
    p = "400",
    display = "block",
  } = props;
  const NextLinkWrapper = type === "internal" ? Link : "div";

  return (
    <NextLinkWrapper href={href}>
      <StyledWrapper
        as="a"
        display={display}
        position="relative"
        p={p}
        border="card"
        borderRadius="5px"
        color="black"
        href={href}
      >
        <Stack space="200">{children}</Stack>
        <Box position="absolute" right="400" top="400">
          {Icon && <Icon />}
        </Box>
      </StyledWrapper>
    </NextLinkWrapper>
  );
});

const Title = React.forwardRef(function Title(props, userRef) {
  return (
    <Box ref={userRef} fontSize="1rem" pr="300">
      {props.children}
    </Box>
  );
});

const Description = React.forwardRef(function Description(props, userRef) {
  return (
    <Box
      ref={userRef}
      fontSize="1rem"
      color="gray"
      fontSize="0.9rem"
      lineHeight="1.3em"
    >
      {props.children}
    </Box>
  );
});

CardLink.Title = Title;
CardLink.Description = Description;

export default CardLink;
