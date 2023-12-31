import {type BuildOptions} from './types/config'
import type webpack from 'webpack'
import {buildResolvers} from './buildResolvers'
import {buildPlugins} from './buildPlugins'
import {buildLoaders} from './buildLoaders'
import {buildDevServer} from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths, isDev} = options
	return {
		mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].js',
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devServer: isDev ? buildDevServer(options) : undefined,
		devtool: isDev ? 'inline-source-map' : undefined,
		module: {
			rules: buildLoaders(options),
		},
	}
}
