const path = require("path");
module.exports = {
  // inform webpack that we are building a bundle
  // forn nodeJS, rateher than for the browser

  target: "node",

  // tell webpack the root file of our server application

  entry: "./src/index.js",
  // tell wbpack where to put the out put file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  // tell webpack to run babel on every file it runs through

  module: {
    rules: [
      {
        test: /\.js?$/, // apply babel to ony js files
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
