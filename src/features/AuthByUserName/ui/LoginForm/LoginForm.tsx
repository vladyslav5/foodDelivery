import React, {memo, useCallback, useEffect} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {useSelector} from 'react-redux'
import {loginActions, loginReducer} from '../../model/slice/loginSlice'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {Text, TextTheme} from 'shared/ui/Text/Text'

import type {} from 'redux-thunk/extend-redux'

import {LoadingButton} from 'widgets/LoadingButton/ui/LoadingButton'
import {getLoginUsername} from '../../model/selectors/getLoginState/getLoginUsername/getLoginUsername'
import {getLoginPassword} from '../../model/selectors/getLoginState/getLoginPassword/getLoginPassword'
import {getLoginError} from '../../model/selectors/getLoginState/getLoginError/getLoginError'
import {getLoginIsLoading} from '../../model/selectors/getLoginState/getLoginIsLoading/getLoginIsLoading'
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'


interface LoginFormProps {
    className?: string,
    onSuccess: () => void
}

const initialReducers: ReducerList = {
	loginForm: loginReducer
}

const LoginForm = memo((props: LoginFormProps) => {

	const {
		className,
		onSuccess
	}
        = props


	const {t} = useTranslation()
	const dispatch = useAppDispatch()
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const error = useSelector(getLoginError)
	const isLoading = useSelector(getLoginIsLoading)


	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])
	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])
	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({password, username}))
		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess()
		}
	}, [dispatch, onSuccess, password, username])
	return (
		<DynamicModuleLoader reducers={initialReducers}>
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