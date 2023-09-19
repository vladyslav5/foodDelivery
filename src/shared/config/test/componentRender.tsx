import {ReactNode} from 'react'
import {render} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import {MemoryRouter} from 'react-router-dom'
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {defaultAsyncReducers} from 'shared/config/storybook/StoreDecorator'
import {StoreProvider} from 'app/providers/StoreProvider'

export  interface componentRenderOptions{
	route?:string,
	state?:DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode,options:componentRenderOptions = {}) {
	const {
		route ='/',
		state
	} = options
	return render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18nForTests}>
				<StoreProvider initialState={state as StateSchema} asyncReducers={defaultAsyncReducers}>
					{component}
				</StoreProvider>
			</I18nextProvider>
		</MemoryRouter>
	)
}