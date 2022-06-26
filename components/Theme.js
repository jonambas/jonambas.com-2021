import React from "react";
import { SweatpantsProvider } from "@sweatpants/theme";

const Theme = (props) => {
  return (
    <SweatpantsProvider
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
          lightGray: "#d9e0e6",
          black: "#000",
        },
        borders: {
          card: "1px solid #d9e0e6",
          cardHover: "1px solid #0000FF",
        },
        fonts: {
          serif:
            "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
          sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif;",
          mono: "'SFMono-Regular', Monaco, Consolas, 'Lucida Console', monospace",
        },
      }}
    >
      {props.children}
    </SweatpantsProvider>
  );
};

export default Theme;
