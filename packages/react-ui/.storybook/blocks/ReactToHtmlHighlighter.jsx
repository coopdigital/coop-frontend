import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactDOMServer from 'react-dom/server';
import prettier from 'prettier/standalone';
import parserHtml from "prettier/parser-html";

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ReactToHtmlHighlighter = ({children}) => {
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(children);
  const prettifiedMarkup = prettier.format(staticMarkup, { parser: "html", plugins: [parserHtml]});

  return (
    <SyntaxHighlighter language="xml" >
      {prettifiedMarkup}
    </SyntaxHighlighter>
  );
};

