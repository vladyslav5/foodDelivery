import {useTranslation} from 'react-i18next'
import {profileActions} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import FileLoader from 'widgets/FileLoader/ui/FileLoader'

interface ProfileLoadAvatarProps {
    className?: string
    onSuccess: () => void
}

export const ProfileLoadAvatar = ({className, onSuccess}: ProfileLoadAvatarProps) => {
	const dispatch = useAppDispatch()
	const onSaveFile = (file: File) => {
		const avatarTempUrl = URL.createObjectURL(file)
		dispatch(profileActions.updateProfile({avatar: avatarTempUrl || '', avatarFile: file}))
		onSuccess()
	}
	const {t} = useTranslation('profile')
	return (
		<FileLoader
			saveFile={onSaveFile}
			acceptFile={'image/*'}
			onDragText={t('drag your image here')}
			onDropText={t('drop your image here')}
		/>
	)
}

