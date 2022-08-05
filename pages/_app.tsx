import type { AppProps } from "next/app";
import Script from "next/script";
import { Box } from "@sweatpants/box";
import { createGlobalStyle } from "styled-components";
import Theme from "../components/Theme";

const GlobalStyle = createGlobalStyle`
  html { 
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
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
