import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {AsyncThunkAction} from '@reduxjs/toolkit'
import axios, {AxiosStatic} from 'axios'


jest.mock('axios')
const mockedAxios = jest.mocked(axios)
export default class TestAsyncThunk<Return, Arg, RejectedValue> {
	dispatch: jest.MockedFn<any>
	api: jest.MockedFunctionDeep<AxiosStatic>
	getState: () => StateSchema
	actionCreator: (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

	constructor(actionCreator: (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>, state?: DeepPartial<StateSchema>) {
		this.actionCreator = actionCreator
		this.dispatch = jest.fn()
		this.getState = jest.fn(() => state as StateSchema)

		this.api = mockedAxios
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg)
		return action(this.dispatch, this.getState, {
			api: this.api,
		})
	}

}