import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(tsx|ts)$/,
        use: "babel-loader",
        exclude: /node_modules/
    }
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module")),
                        localIdentName: isDev
                            ? "[path][name]__[local].css"
                            : "[hash:8].css"
                    }
                }
            },
            "sass-loader"
        ],
        exclude: /node_modules/
    }
    return [
        babelLoader,
        cssLoaders,
    ]
}