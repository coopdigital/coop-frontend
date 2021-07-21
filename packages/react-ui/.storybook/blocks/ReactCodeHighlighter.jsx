import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactDOMServer from 'react-dom/server';
import prettier from 'prettier';

const ReactCodeHighlighter = (component) => {

  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  console.log(staticMarkup);
  let prettyHtml = prettier.format(staticMarkup, { parser: "html" });



  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ReactCodeHighlighter;