import webpack from 'webpack'
import {RuleSetRule} from 'webpack'
import {BuildPaths} from '../webpack/build/types/config'
import path from 'path'
import {buildCssLoader} from '../webpack/build/loaders/buildCssLoader'
import {buildSvgLoader} from '../webpack/build/loaders/buildSvgLoader'

export default ({config}: { config: webpack.Configuration }) => {
	const paths:BuildPaths = {
		build:'',
		html:'',
		entry:'',
		src: path.resolve(__dirname,'..','..','src')
	}
	config?.resolve?.modules?.push(paths.src)
	config?.resolve?.extensions?.push('.ts','.tsx')
	const imageRule = config.module?.rules?.find(rule => {
		const test = (rule as { test: RegExp }).test

		if (!test) {
			return false
		}

		return test.test('.svg')
	}) as { [key: string]: any }
	imageRule.exclude = /\.svg$/
	config.module?.rules?.push(buildSvgLoader())
	config.module?.rules?.push(buildCssLoader(true))

	return config
}