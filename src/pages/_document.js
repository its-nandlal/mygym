import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="MY GYM">
        <meta name="description" content="A brief description of my Next.js application for SEO purposes." />
      </Head>
      <body className="antialiased relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
