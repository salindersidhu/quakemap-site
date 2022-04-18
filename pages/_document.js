import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
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
