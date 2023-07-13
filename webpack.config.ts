import {Configuration} from "webpack"
import {CleanWebpackPlugin} from "clean-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import 'webpack-dev-server';

const config: Configuration = {
    mode: "development",
    entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.tsx")],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".ts"]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "src/index.html"}),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    }
}
export default config;