import React, {memo, useCallback, useEffect} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {useDispatch, useSelector, useStore} from 'react-redux'
import {loginAction, loginReducer} from '../../model/slice/loginSlice'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {Text, TextTheme} from 'shared/ui/Text/Text'

import type {} from 'redux-thunk/extend-redux'

import {LoadingButton} from 'widgets/LoadingButton/ui/LoadingButton'
import {getLoginUsername} from '../../model/selectors/getLoginState/getLoginUsername'
import {getLoginPassword} from '../../model/selectors/getLoginState/getLoginPassword'
import {getLoginError} from '../../model/selectors/getLoginState/getLoginError'
import {getLoginIsLoading} from '../../model/selectors/getLoginState/getLoginIsLoading'
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'


interface LoginFormProps {
    className?: string
}
const initialReducers:ReducerList = {
	loginForm:loginReducer
}

const LoginForm = memo(({className}: LoginFormProps) => {
	const {t} = useTranslation()
	const dispatch = useDispatch()
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const error = useSelector(getLoginError)
	const isLoading = useSelector(getLoginIsLoading)




	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginAction.setUsername(value))
	}, [dispatch])
	const onChangePassword = useCallback((value: string) => {
		dispatch(loginAction.setPassword(value))
	}, [dispatch])
	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({password, username}))
	}, [dispatch, password, username])
	return (
		<DynamicModuleLoader  reducers={initialReducers}>
			<>
				<div className={classNames(cls.LoginForm, {}, [className!])}>
					<Input
						theme={InputTheme.PRIMARY}
						type={'text'}
						placeholder={t('username')}
						onChange={onChangeUsername}
						value={username}
					/>
					<Input
						theme={InputTheme.PRIMARY}
						type={'password'}
						placeholder={t('password')}
						onChange={onChangePassword}
						value={password}
					/>
					<LoadingButton text={t('log in')} isLoading={isLoading} onClick={onLoginClick}/>
				</div>
				{
					error && <Text
						title={'Error'}
						theme={TextTheme.ERROR}
						className={cls.error}
						text={t('Incorrect password or username')}
					/>
				}
			</>
		</DynamicModuleLoader>
	)
})
export default LoginForm