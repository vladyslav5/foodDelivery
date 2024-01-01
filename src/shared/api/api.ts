import axios from 'axios'
import {USER_LOCALSTORAGE_KEY} from 'shared/config/consts/localStorage'

export const $api = axios.create({
	baseURL:__API__
})
$api.interceptors.request.use((req)=>{
	req.headers['authorization'] = localStorage.getItem(USER_LOCALSTORAGE_KEY)
	return req
})