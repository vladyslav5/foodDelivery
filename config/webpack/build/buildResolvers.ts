import type webpack from 'webpack'
import {type BuildOptions} from './types/config'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: ['.ts', '.tsx', '.js', '.ts'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		alias: {},
	}
}
