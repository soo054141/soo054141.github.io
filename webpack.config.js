const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const getRootByTargetPath = (target = "/") => process.cwd() + target;

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        publicPath: "./",
        path: getRootByTargetPath("/build"),
        filename: "js/[name].js",
        chunkFilename: "js/[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
            },
            {
                test: /\.(png|jpg)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        publicPath: "./build/",
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            src: getRootByTargetPath("/src"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html",
            filename: "index.html",
        }),
    ],
    devServer: {
        contentBase: getRootByTargetPath("/static"),
        publicPath: "/",
        host: "localhost",
        port: "1234",
        watchContentBase: true,
        hot: true,
        disableHostCheck: true,
        overlay: true,
        transportMode: "ws",
        open: false,
        historyApiFallback: true,
    },
};
