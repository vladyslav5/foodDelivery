import {StoryFn} from '@storybook/react'
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider'


export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
	document.body.className = theme
	return (<ThemeProvider>
		<div className={`app ${theme}`}>
			<Story/>
		</div>
	</ThemeProvider>)
}


