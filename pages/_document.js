import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Quakemap" />
        <meta
          name="description"
          content="Track earthquakes around the world in realtime from the comfort of your smartphone."
        />
        <meta name="og:site_name" content="Quakemap" />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://salindersidhu.github.io/quakemap"
        />
        <meta name="og:title" content="Quakemap" />
        <meta
          name="og:description"
          content="Track earthquakes around the world in realtime from the comfort of your smartphone."
        />
        <meta
          name="og:image"
          content="https://salindersidhu.github.io/quakemap/banner.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@quakemap" />
        <meta
          name="twitter:url"
          content="https://salindersidhu.github.io/quakemap"
        />
        <meta name="twitter:title" content="Quakemap" />
        <meta
          name="twitter:description"
          content="Track earthquakes around the world in realtime from the comfort of your smartphone."
        />
        <meta
          name="twitter:image"
          content="https://salindersidhu.github.io/quakemap/banner.png"
        />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
