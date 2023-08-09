import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {Input, InputTheme} from 'shared/ui/Input/Input'



interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
	const {t} = useTranslation()
	return (
		<div className={classNames(cls.LoginForm, {}, [className!])}>
			<Input theme={InputTheme.PRIMARY} type={'text'} placeholder={t('username')}/>
			<Input theme={InputTheme.PRIMARY} type={'text'} placeholder={t('password')}/>
			<Button theme={ButtonTheme.OUTLINE}>
				{t('log in')}
			</Button>
		</div>
	)
}
