module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true
	},
	'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
	'overrides': [
		{
			'files': ['*.test.tsx', '*.stories.tsx'],
			'rules': {
				'i18next/no-literal-string': 'off'
			}
		}]
	,
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': ['@typescript-eslint', 'react', 'i18next'],
	'rules': {
		'react/display-name':'off',
		'@typescript-eslint/no-explicit-any':'off',
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'i18next/no-literal-string': ['error', {
			markupOnly: true
		}]
	},
	globals: {
		__IS_DEV__: true
	}
}