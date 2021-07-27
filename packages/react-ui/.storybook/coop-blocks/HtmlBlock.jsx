import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import ReactDOMServer from "react-dom/server";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";

import "./HtmlBlock.css";

import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HtmlBlock = ({ children }) => {
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(children);
  const prettifiedMarkup = prettier.format(staticMarkup, {
    parser: "html",
    plugins: [parserHtml]
  });

  return (
    <SyntaxHighlighter language="xml" showLineNumbers style={a11yDark}>
      {prettifiedMarkup}
    </SyntaxHighlighter>
  );
};
