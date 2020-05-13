//  the root file for the ppication on the server
// we are running webpack with babel so we can use es6 modules in node as well

// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

// this is necessary to accend the client bundle
app.use(express.static("public"));

app.get("/", (req, res) => {
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

  res.send(html);
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
