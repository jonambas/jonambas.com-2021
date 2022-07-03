import type { AppProps } from "next/app";
import Script from "next/script";
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

function JonsApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Box m={["500", "600", "800"]}>
          <Component {...pageProps} />
        </Box>
      </Theme>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-W9GY49S601"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-W9GY49S601');`}
      </Script>
    </>
  );
}

export default JonsApp;
