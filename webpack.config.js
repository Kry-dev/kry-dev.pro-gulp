const webpack           = require('webpack'); 
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');
const path              = require('path');
const PATH = {
  source: {
    about: path.join(__dirname, 'src/scripts/about.js'),
    index: path.join(__dirname, 'src/scripts/index.js'),
    'works': path.join(__dirname, 'src/scripts/works.js'),
    blog: path.join(__dirname, 'src/scripts/blog.js'),
  },
  build: path.join(__dirname, 'src/scripts')
};


const config = {
  entry: PATH.source,
  output: {
    filename: 'main.min.js'
  },
  output: {
    path: PATH.build,
    filename: '[name].min.js',
  },
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // })
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
    devtool:"source-map",
    module: {
      rules: [
        {
          test: /\.(frag|vert)$/,
          loader: 'webpack-glsl-loader'
        }

      ],
    },
};

module.exports = config;
