import {type Configuration} from 'webpack'
import 'webpack-dev-server'
import {buildWebpackConfig} from './config/webpack/build/buildWebpackConfig'
import {type BuildEnv, type BuildPaths} from './config/webpack/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		build: path.resolve(__dirname, 'dist'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}
	const mode = env.mode || 'development'
	const isDev = mode === 'development'
	const PORT = env.port || 3000
	const apiURL = env.apiURL || 'http://localhost:4000/'
	console.log(`mode - ${mode}`)
	const config: Configuration = buildWebpackConfig({
		project:'frontend',
		mode,
		paths,
		isDev,
		port: PORT,
		apiURL
	})
	return config
}
