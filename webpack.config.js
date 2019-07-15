// var path = require("path");

// module.exports = {
//   mode: "production",
//   entry: "./src/index.jsx",
//   output: {
//     path: path.resolve("lib"),
//     filename: "index.js",
//     libraryTarget: "commonjs2"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react"]
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   }
// };
var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};