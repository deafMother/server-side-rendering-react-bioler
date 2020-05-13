// we need a client bundles as well to make sure to ship JS to the client along with the HTML
// so that react wotks
const path = require("path");

module.exports = {
  // tell webpack the root file of our server application

  entry: "./src/client/client.js",
  // tell webpack where to put the out put file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
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
