import React, {memo, useCallback} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {Input, InputTheme} from 'shared/ui/Input/Input'
import {useDispatch, useSelector} from 'react-redux'
import {loginActions} from '../../model/slice/loginSlice'
import {getLoginState} from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {Loader, LoaderTheme} from 'shared/ui/Loader/Loader'

import type {} from 'redux-thunk/extend-redux'


interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
	const {t} = useTranslation()
	const dispatch = useDispatch()
	const {username, password, error, isLoading} = useSelector(getLoginState)

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])
	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])
	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({password, username}))
	}, [dispatch, password, username])
	return (
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
				<Button
					onClick={onLoginClick}
					theme={ButtonTheme.OUTLINE}
					disabled={isLoading}

				>
					{
						isLoading
							?
							<div className={cls.loader}>
								<Loader theme={LoaderTheme.SMALL}/>
							</div>
							:
							t('log in')
					}
				</Button>
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

	)
})