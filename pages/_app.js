import Theme from "@sweatpants/theme";
import Box from "@sweatpants/box";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    transition: 0.15s;
  }
`;

function JonsApp({ Component, pageProps }) {
  return (
    <Theme
      theme={{
        space: {
          0: "0rem",
          100: "0.25rem",
          200: "0.5rem",
          300: "0.75rem",
          400: "1rem",
          500: "1.5rem",
          600: "2rem",
          700: "3rem",
          800: "4rem",
          900: "6rem",
          1000: "8rem",
        },

        colors: {
          blue: "#0000FF",
          lightBlue: "#cce3ff",
          lighterBlue: "#e8f3ff",
          gray: "#626f7a",
          black: "#000",
        },
        borders: {
          card: "1px solid #d9e0e6",
          cardHover: "1px solid #0000FF",
        },
        fonts: {
          serif:
            "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
          sans:
            "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif;",
        },
      }}
    >
      <GlobalStyle />
      <Box m={["500", "600", "800"]}>
        <Component {...pageProps} />
      </Box>
    </Theme>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default JonsApp;
