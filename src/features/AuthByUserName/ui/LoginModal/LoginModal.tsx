import React from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './LoginModal.module.scss'
import {Modal} from 'shared/ui/Modal/Modal'
import {LoginForm} from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string,
	isOpen:boolean,
	onClose:()=>void
}

export const LoginModal = (props: LoginModalProps) => {
	const { isOpen,onClose,className}
		= props
	return (
		<Modal className={classNames(cls.LoginModal, {}, [className!])}
			onClose={onClose}
			isOpen={isOpen}
			lazy
		>
			<LoginForm/>
		</Modal>
	)
}
