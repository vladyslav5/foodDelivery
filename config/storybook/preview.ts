import type {Preview} from '@storybook/react'
import {StyleDecorator} from 'shared/config/storybook/StyleDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from '../../src/app/providers/ThemeProvider'
import {RouterDecorator} from 'shared/config/storybook/RouterDecorator'
// import '../../src/app/styles/index.scss'
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		}
	},
	decorators:[StyleDecorator,ThemeDecorator(Theme.LIGHT),RouterDecorator]
}


export default preview
