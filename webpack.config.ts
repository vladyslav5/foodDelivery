import {Configuration} from "webpack"
import 'webpack-dev-server';
import {buildWebpackConfig} from "./config/webpack/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/webpack/build/types/config";
import path from "path";


export default (env:BuildEnv) => {

    const paths: BuildPaths = {
        build: path.resolve(__dirname, "dist"),
        entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.tsx")],
        html: path.resolve(__dirname, "src", "index.html")
    }
    const mode = env.mode || "development"
    const isDev = "development" === mode
    const PORT = env.port || 3000
    console.log(`mode - ${mode}`)
    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
    return config
};