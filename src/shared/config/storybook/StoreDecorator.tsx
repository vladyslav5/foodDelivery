import {StoryFn} from '@storybook/react'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {StoreProvider} from 'app/providers/StoreProvider'
import {DeepPartial} from '@reduxjs/toolkit'


export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: StoryFn) => {

	return (
		<StoreProvider initialState={initialState}>
			<Story/>
		</StoreProvider>
	)
}


