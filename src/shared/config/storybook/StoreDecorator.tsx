import {StoryFn} from '@storybook/react'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {StoreProvider} from 'app/providers/StoreProvider'
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit'
import {loginReducer} from 'features/AuthByUserName/model/slice/loginSlice'

const defaultAsyncReducers:DeepPartial<ReducersMapObject<StateSchema>> ={
	loginForm:loginReducer
}

export const StoreDecorator = (initialState: DeepPartial<StateSchema>,asyncReducers:DeepPartial<ReducersMapObject<StateSchema>>) => (Story: StoryFn) => {

	return (
		<StoreProvider
			initialState={initialState as StateSchema}
			asyncReducers={{...defaultAsyncReducers,...asyncReducers}}
		>
			<Story/>
		</StoreProvider>
	)
}


