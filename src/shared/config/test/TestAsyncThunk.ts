import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {AsyncThunkAction} from '@reduxjs/toolkit'

export default class TestAsyncThunk<Return,Arg,RejectedValue>{
	dispatch:jest.MockedFn<any>
	getState:()=>StateSchema
	actionCreator:(arg:Arg)=>AsyncThunkAction<Return, Arg, {rejectValue:RejectedValue}>

	constructor(actionCreator:(arg:Arg)=>AsyncThunkAction<Return, Arg, {rejectValue:RejectedValue}>) {
		this.actionCreator = actionCreator
		this.dispatch = jest.fn()
		this.getState = jest.fn()
	}

	async callThunk(arg:Arg){
		const action = this.actionCreator(arg)
		return await action(this.dispatch, this.getState, undefined)
	}

}