# steps to set up ssr react

---

## one( install dependencies)

> install the dependencies like

        - react, react dom, redux... etc
        - webpack, babel... etc

## two(set up server)

- > set up the express server in the src/index.js
- > make a client folder in src to hold the client react app and add the react components(src/client)
- > import the home component (or any other component) to be initially rendered in the browser
- > set up the html template in the express response to inclode the string converted home component
- > specify the static directory(like sasy 'public' in this case), this directory will contain the bundled js file need by the browser

### three(configure server)

> configure the webpack.server.js in root dir

- specify the input output path and the bable loader
- at this point we are only sending the html but not the actual react js bundle so the page wond be interactive

## four(set the client bundle)

> configrue the client bundle to contain the react app which will be hydrated in the template

- give a "root" id the the html content rendered above in the express response
- create src/client/client.js (this will be the entry point of the react app in the browser)
- set it up like a normal index.js file we set up in any react app
- next step in to hydrate(it is just like render) this component to the 'root' element

        > configure the webpack.client.js in the root
             entry: "./src/client/client.js",
              output: {
                filename: "bundle.js",
                path: path.resolve(__dirname, "public"),
              },
              // this has to be outputed in the public directory


## five(set up the scripts in package.json)

- we need to run these tree scripts in devolopment however in production not need to run nodemon

```js

 "scripts": {
    // set up nodemon the watc for changes to the build/bundle.js and restart the node if any change
    "dev:server": "nodemon --watch build --exec node build/bundle.js",
    // start webpack to bundle the server code and rebuilt in case any changes
    "dev:build:server": "webpack --config webpack.server.js --watch",
    // start webpack to bundle the client side and watch it for changes
    "dev:build:client": "webpack --config webpack.client.js --watch"
  },
```

**the basic set up is complete**

## six (refactoring )

- refactor the webpack config in the client and server to have a common babel loader using **webpack merge**
