import React from "react";
import NextHead from "next/head";

function Head(props) {
  const origin = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return window.location.origin;
    }
    return "";
  }, []);

  return (
    <NextHead>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta name="author" content="Jon Ambas" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="description" content={props.description} />
      <meta name="twitter:creator" content="@jonambas" />
      {props.image ? (
        <>
          <meta name="twitter:image" content={`${origin}${props.image}`} />
          <meta property="og:image" content={`${origin}${props.image}`} />
        </>
      ) : null}
      <link rel="shortcut icon" href="/favicon.ico" />
      {props.children}
    </NextHead>
  );
}

export default Head;
