import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";
import css from "@styled-system/css";

const StyledLink = styled.a`
  ${css({
    color: "accent",
    borderRadius: "small",
    transition: "0.15s",
  })}

  &:focus-visible {
    outline: none;
    ${css({
      boxShadow: "focusTight",
    })}
  }
`;

const Link: FC<ComponentPropsWithoutRef<"a">> = (props) => {
  return <StyledLink {...props} />;
};

export default Link;
