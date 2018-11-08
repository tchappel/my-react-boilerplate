/* This file is a "node script", almost similar to JS */
// all options for config are listed here https://webpack.js.org/configuration/

const path = require('path');
// this gives you access to "path" module of Node.js that provides utilities for working with file and directory paths. You must have Node.js installed


module.exports = {
  // this is the way Node.js expose things to other files (similarly to export)

  mode: "development", // "production" | "development" | "none"
  // enables webpack to use its built-in optimizations accordingly.
    // it has become a required property, if you don't wanna set any use "none"

  entry: './src/app.js',
  // from which entry point / JavaScript file webpack should start.
    // it takes a RELATIVE PATH

  output: {
    // options related to webpack output file

    path: path.join(__dirname, 'public'),
    // the target directory for all output files
        // must be an ABSOLUTE path (use the Node.js path.join() or path.resolve())

    filename: 'bundle.js'
  },
  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.js$/,
        // matching conditions for a file to be processed by a loader
        // regEx meaning "all files with .js extension"        
        loader: 'babel-loader',
        // the loader which should be applied
        exclude: /node_modules/
        // excluded files must not be matched (takes preference over test and include)
        // you DON'T want to transform files in node_modules
      },

      /* The following rules apply if you want to style with css/sccs */
      {
      test: /\.s?css$/,
      // regEx meaning "all files that end with .scss or .css" 
      use: [
        // property "use" is same as "loader", but it allows for an array of loaders to be applied
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  // allows source maps in development (just adding this property - no installations)
  // https://webpack.js.org/configuration/devtool/#devtool
  
  devServer: {
    contentBase: path.join(__dirname, 'public')
    // Tells the devServer where to serve content from
      // This is only necessary if you want to serve static files. 
  }
};
