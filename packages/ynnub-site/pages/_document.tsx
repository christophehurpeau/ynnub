import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import ynnubHead from 'ynnub/Head';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          {ynnubHead()}
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,es2015,es2016" />
        </Head>
        <body className="_document-loaded">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
