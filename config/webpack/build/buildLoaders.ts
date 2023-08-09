import type webpack from 'webpack'
import {type BuildOptions} from './types/config'
import {buildCssLoader} from './loaders/buildCssLoader'
import {buildSvgLoader} from './loaders/buildSvgLoader'


export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const svgLoader = buildSvgLoader()
	const babelLoader = {
		test: /\.(tsx|ts)$/,
		use: {
			loader:'babel-loader',
			options: {
				plugins: [isDev ? 'react-refresh/babel' : undefined]
			}
		},
		exclude: /node_modules/,

	}
	const cssLoaders = buildCssLoader(isDev)
	return [
		babelLoader,
		cssLoaders,
		svgLoader,
		fileLoader,
	]
}
