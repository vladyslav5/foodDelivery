import React, {Suspense} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {Modal} from 'shared/ui/Modal/Modal'
import {LoginFormLazy} from '../LoginForm/LoginForm.lazy'
import {Loader} from 'shared/ui/Loader/Loader'

interface LoginModalProps {
    className?: string,
	isOpen:boolean,
	onClose:()=>void
}

export const LoginModal = (props: LoginModalProps) => {
	const { isOpen,onClose,className}
		= props
	return (
		<Modal className={classNames('', {}, [className!])}
			onClose={onClose}
			isOpen={isOpen}
			lazy
		>
			<Suspense fallback={<Loader/>}>
				<LoginFormLazy onSuccess={onClose}/>
			</Suspense>
		</Modal>
	)
}
