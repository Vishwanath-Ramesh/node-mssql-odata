const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), //Output build directory name
    publicPath: "/", //The bundled files will be available in the browser under this path.
  },
  plugins: [
    new CleanWebpackPlugin(), //Remove HTML file and re-create on each build
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async",
    }), //Load bundle scripts asynchronously
  ],
  devServer: {
    open: true, //To open the browser after server had been started
    contentBase: './src', //where to serve content(static files) from,
    inline: true, //Inject scripts into the bundle to show live reloading and build messages in the browser console.
    hot: true, //Enables HMR
    historyApiFallback: true, //In case 404 responses, root(index.html) file will be served,
  },
  devtool: "source-map", //How source codes are mapped/shown in the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
