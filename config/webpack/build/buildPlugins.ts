import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import webpack, {ProgressPlugin} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({paths}:BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({template: paths.html}),
        new CleanWebpackPlugin(),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename:"css/[name].[contenthash:8].css",
            chunkFilename:"css/[name].[contenthash:8].css",
        })
    ]
}