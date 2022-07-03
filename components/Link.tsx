import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  border-radius: 3px;
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px white, 0 0 0 6px ${({ theme }) => theme.colors.blue};
  }
`;

const Link: FC<ComponentPropsWithoutRef<"a">> = (props) => {
  return <StyledLink {...props} />;
};

export default Link;
