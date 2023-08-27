import HtmlWebpackPlugin from 'html-webpack-plugin'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import webpack, {ProgressPlugin} from 'webpack'
import {type BuildOptions} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins({paths, isDev,apiURL}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({template: paths.html}),
		new
		CleanWebpackPlugin(),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__:JSON.stringify(apiURL),
		}),

	]

	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin())
		plugins.push(new BundleAnalyzerPlugin({
			openAnalyzer: false
		}))
		plugins.push(new ReactRefreshPlugin())
	}
	return plugins
}
