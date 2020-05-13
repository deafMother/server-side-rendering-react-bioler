// render the react app and return the string

import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

export default () => {
  /*
  note: we are sending HTML code and not JS like in normal react apps
  so we need to hydrate  and have sencond client bundle
  */
  const content = renderToString(<Home />);

  /*
    add html script tp inject the client bundle js into the html content above
  */
  const html = `
  <html>
    <head>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>  

  </html>
  `;

  return html;
};
