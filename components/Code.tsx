import React from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { Box } from "@sweatpants/box";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import Clamp from "./Clamp";

const Wrapper = styled.div`
  ${css({
    bg: "codeBg",
    borderRadius: "large",
    lineHeight: "1.5em",
  })}

  * {
    background: none !important;
    text-decoration: none !important;
    ${css({
      fontSize: "0.8rem",
      lineHeight: "1.6em !important",
    })}
  }
`;

const Code = React.forwardRef<
  HTMLDivElement,
  { code?: string; language?: string }
>(function Code(props, userRef) {
  const { code, language = "jsx" } = props;

  return (
    <Clamp>
      <Wrapper ref={userRef}>
        <SyntaxHighlighter language={language} style={style}>
          {code.trim()}
        </SyntaxHighlighter>
      </Wrapper>
    </Clamp>
  );
});

export default Code;
