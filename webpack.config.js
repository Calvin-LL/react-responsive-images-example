const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp|tiff?)$/i,
        oneOf: [
          {
            // if the import url looks like "some.png?placeholder..."
            resourceQuery: /placeholder/,
            use: [
              {
                loader: "webpack-image-placeholder-loader",
                options: {
                  format: "hex",
                },
              },
            ],
          },
          {
            // if the import url looks like "some.png?srcset..."
            resourceQuery: /srcset/,
            use: [
              {
                loader: "webpack-image-srcset-loader",
                options: {
                  sizes: ["500w", "1000w", "1500w", null],
                },
              },
              {
                loader: "webpack-image-resize-loader",
                options: {
                  sharpOptions: {
                    jpeg: {
                      trellisQuantisation: true,
                      overshootDeringing: true,
                      progressive: true,
                      optimiseScans: true,
                      quantisationTable: 8,
                    },
                    webp: {
                      smartSubsample: true,
                      reductionEffort: 6,
                    },
                    png: {
                      progressive: true,
                      adaptiveFiltering: true,
                      palette: true,
                    },
                  },
                },
              },
            ],
          },
          {
            // if no previous resourceQuery match
            use: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
  },
};
