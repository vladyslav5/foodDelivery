import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {Modal} from 'shared/ui/Modal/Modal'
import React, {Suspense} from 'react'
import {Loader} from 'shared/ui/Loader/Loader'
import {ProfileLoadAvatar} from 'entities/Profile/ui/ProfileLoadAvatar/ProfileLoadAvatar'

interface ProfileLoadAvatarModalProps {
    className?: string
    isOpen: boolean,
    onClose: () => void
}

export const ProfileLoadAvatarModal = (props: ProfileLoadAvatarModalProps) => {
	const {
		isOpen,
		onClose,
		className
	} = props
	return (
		<Modal className={classNames('', {}, [className!])}
			onClose={onClose}
			isOpen={isOpen}
			lazy
		>
			<Suspense fallback={<Loader/>}>
				<ProfileLoadAvatar onSuccess={onClose}/>
			</Suspense>
		</Modal>
	)
}
