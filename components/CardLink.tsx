import React from "react";
import Link from "next/link";
import styled from "styled-components";
import css from "@styled-system/css";
import { Box, BoxOwnProps } from "@sweatpants/box";
import { Stack } from "@sweatpants/stack";

type CardLinkProps = React.PropsWithChildren<{
  href: React.ComponentProps<typeof Link>["href"];
  type?: "internal" | "external";
  icon?: React.ElementType;
}> &
  BoxOwnProps;

const StyledWrapper = styled(Box)<CardLinkProps>`
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  transition: 0.15s;
  height: 100%;

  &:hover {
    ${css({
      color: "accent",
      border: "cardHover",
      boxShadow: "cardHover",
    })}
  }

  &:focus-visible {
    outline: none;
    border-color: transparent;
    ${css({
      color: "accent",
      boxShadow: "focus",
    })}
  }
`;

const CardLink = React.forwardRef<HTMLAnchorElement, CardLinkProps>(
  function CardLink(props, userRef) {
    const {
      children,
      href,
      type = "internal",
      icon: Icon,
      p = "400",
      display = "block",
    } = props;
    const NextLinkWrapper = type === "internal" ? Link : React.Fragment;
    const outerAttrs =
      type === "internal"
        ? {
            href,
          }
        : {};
    return (
      <NextLinkWrapper {...outerAttrs}>
        <StyledWrapper
          as="a"
          display={display}
          position="relative"
          p={p}
          border="card"
          borderRadius="large"
          color="black"
          href={`${href}`}
          ref={userRef}
        >
          <Stack space="200">{children}</Stack>
          <Box as="span" position="absolute" right="400" top="400">
            {Icon && <Icon />}
          </Box>
        </StyledWrapper>
      </NextLinkWrapper>
    );
  }
) as React.ForwardRefExoticComponent<CardLinkProps> & {
  Title: typeof Title;
  Description: typeof Description;
};

const Title = React.forwardRef<HTMLDivElement, { children?: React.ReactNode }>(
  function Title(props, userRef) {
    return (
      <Box
        as="span"
        display="block"
        ref={userRef}
        fontSize="1rem"
        lineHeight="1.2em"
        pr="500"
      >
        {props.children}
      </Box>
    );
  }
);

const Description = React.forwardRef<
  HTMLDivElement,
  { children?: React.ReactNode }
>(function Description(props, userRef) {
  return (
    <Box
      as="span"
      display="block"
      ref={userRef}
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
