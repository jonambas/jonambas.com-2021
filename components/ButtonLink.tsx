import React from "react";
import { Box } from "@sweatpants/box";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Box)<React.ComponentPropsWithRef<"a">>`
  box-sizing: border-box;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    outline: none;
    background: transparent;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.lighterBlue};
    color: ${({ theme }) => theme.colors.blue};
  }

  &:focus-visible {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 3px white, 0 0 0 6px ${({ theme }) => theme.colors.blue};
  }
`;

const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<"a">
>(function ButtonLink(props, userRef) {
  const { href, children } = props;
  return (
    <Link href={href}>
      <StyledLink
        as="a"
        display="inline-flex"
        alignItems="center"
        href={href}
        bg="blue"
        borderRadius="3px"
        color="white"
        p="300"
        fontSize="0.9rem"
        ref={userRef}
      >
        {children}
      </StyledLink>
    </Link>
  );
});

export default ButtonLink;
