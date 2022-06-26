import { Box } from "@sweatpants/box";
import { createGlobalStyle } from "styled-components";
import Theme from "../components/Theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    transition: 0.15s;
  }

  .code code span {
    font-size: 14px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.mono};
    line-height: 1.8em;
  }

  .code pre {
    margin: 0 !important;
    padding: 0;
    border: none !important;
  }

  .code {
    border: ${({ theme }) => theme.borders.card};
    border-radius: 4px;
    overflow-x: auto;
  }
`;

function JonsApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Box m={["500", "600", "800"]}>
        <Component {...pageProps} />
      </Box>
    </Theme>
  );
}

export default JonsApp;
