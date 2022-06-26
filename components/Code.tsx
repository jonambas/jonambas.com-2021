import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Clamp from "./Clamp";

const Code = React.forwardRef<
  HTMLDivElement,
  { code?: string; language?: string }
>(function Code(props, userRef) {
  const { code, language = "jsx" } = props;

  return (
    <Clamp>
      <div className="code" ref={userRef}>
        <SyntaxHighlighter language={language} style={ghcolors}>
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </Clamp>
  );
});

export default Code;
