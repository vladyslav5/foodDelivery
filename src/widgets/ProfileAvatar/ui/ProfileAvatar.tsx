import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './ProfileAvatar.module.scss'
import {useTranslation} from 'react-i18next'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {useCallback, useState} from 'react'
import {ProfileLoadAvatarModal} from 'entities/Profile'
import {Avatar} from 'shared/ui/Avatar/ui/Avatar'


interface ProfileAvatarProps {
    className?: string
    alt: string,
    src?: string,
    readonly?: boolean
}

export const ProfileAvatar = (props: ProfileAvatarProps) => {
	const {
		className,
		alt,
		src,
		readonly
	} = props
	const {t} = useTranslation()
	const [isModal, setIsModal] = useState(false)
	const onShowModal = useCallback(()=>{
		setIsModal(true)
	},[])
	const onCloseModal = useCallback(()=>{
		setIsModal(false)
	},[])
	return (
		<div className={classNames(cls.ProfileAvatar, {}, [className!])}>
			{src&&<Avatar alt={alt} size={150} src={src}/>}
			{!readonly && <>
				<Button
					theme={ButtonTheme.CLEAR}
					className={cls.change}
					onClick={onShowModal}
				>
					{t('Change avatar')}
				</Button>
				<ProfileLoadAvatarModal isOpen={isModal} onClose={onCloseModal}/>
			</>
			}
		</div>
	)
}
