import React, { ComponentPropsWithoutRef, FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import css from "@styled-system/css";

const StyledLink = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  transition: 0.15s;

  ${css({
    border: "card",
    borderRadius: "large",
    color: "gray",
    fontSize: "0.9rem",
    lineHeight: "1.3em",
    p: "300",
  })}

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

type SmallCardLinkProps = {
  type?: "internal" | "external";
} & ComponentPropsWithoutRef<"a">;

const SmallCardLink: FC<SmallCardLinkProps> = (props) => {
  const { type, href, ...rest } = props;
  const Wrapper = type === "internal" ? Link : React.Fragment;
  const outerProps =
    type === "internal"
      ? {
          href,
        }
      : {};

  return (
    <Wrapper {...outerProps}>
      <StyledLink href={href} {...rest} />
    </Wrapper>
  );
};

export default SmallCardLink;
