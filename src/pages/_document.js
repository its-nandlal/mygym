import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/next';

export default function Document() {
  return (
    <Html lang="en">
      <Head title="MY GYM">
        <meta name="description" content="A brief description of my Next.js application for SEO purposes." />
        <meta name="google-site-verification" content="CVCOKqWaeZXg5JJ7SdSoUWfw7N7mQNYQpJXUfABqiOI" />
      </Head>
      <body className="antialiased relative">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
