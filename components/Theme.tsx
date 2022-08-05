import React from "react";
import { SweatpantsProvider } from "@sweatpants/theme";
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
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
    accent: "#582FFF",
    accentLight: "#EFEBFF",
    gray: "#626f7a",
    lightGray: "#d9e0e6",
    black: "#000",
    codeBg: "#1a1a1a",
  },
  borders: {
    card: "1px solid #d9e0e6",
    cardHover: "1px solid #582FFF",
  },
  shadows: {
    cardHover: "0 0 0 4px #EFEBFF",
    focus: "0 0 0 3px white, 0 0 0 6px #582FFF",
    focusTight: "0 0 0 3px #582FFF",
  },
  fonts: {
    serif:
      "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif",
    mono: "'SFMono-Regular', Monaco, Consolas, 'Lucida Console', monospace",
  },
  radii: {
    small: "3px",
    large: "5px",
  },
};

const Theme = (props: React.PropsWithChildren<{}>) => {
  return (
    <SweatpantsProvider theme={defaultTheme}>
      {props.children}
    </SweatpantsProvider>
  );
};

export default Theme;
