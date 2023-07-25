import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {type BuildOptions} from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const svgLoader = {
		test: /\.svg$/i,
		use: ['@svgr/webpack'],
	}
	const babelLoader = {
		test: /\.(tsx|ts)$/,
		use: 'babel-loader',
		exclude: /node_modules/,
	}
	const cssLoaders = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module')),
						localIdentName: isDev
							? '[path][name]__[local].css'
							: '[hash:8].css',
					},
				},
			},
			'sass-loader',
		],
		exclude: /node_modules/,
	}
	return [
		babelLoader,
		cssLoaders,
		svgLoader,
		fileLoader,
	]
}
