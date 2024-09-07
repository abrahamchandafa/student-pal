
const path = require("path")

module.exports = {
    mode: "development", // default is "production"
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "web", //web for client-side, node for server-side
    devServer: {
        port: "3000",
        static: ["./public"], //which file to serve
        open: true,
        hot: true, //faster in dev mode, slower in production
        liveReload: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss)$/,
                use: [{
                  // inject CSS to page
                  loader: 'style-loader'
                }, {
                  // translates CSS into CommonJS modules
                  loader: 'css-loader'
                }, {
                  // Run postcss actions
                  loader: 'postcss-loader',
                  options: {
                    // `postcssOptions` is needed for postcss 8.x;
                    // if you use postcss 7.x skip the key
                    postcssOptions: {
                      // postcss plugins, can be exported to postcss.config.js
                      plugins: function () {
                        return [
                          require('autoprefixer')
                        ];
                      }
                    }
                  }
                }, {
                  // compiles Sass to CSS
                  loader: 'sass-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(woff|woff2)$/,
              use: 'url-loader',
            },
        ]
    }
}