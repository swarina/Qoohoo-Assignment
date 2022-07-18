import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body className="min-h-screen text-base max-w-[1536px] mx-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
