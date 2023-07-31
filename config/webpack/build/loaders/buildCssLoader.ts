import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev:boolean){
	return {
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
}