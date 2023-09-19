import {ChangeEvent, DragEvent, FormEvent, useCallback, useRef, useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './FileLoader.module.scss'
import {Text, TextAlign, TextSize} from 'shared/ui/Text/Text'

interface ProfileLoadAvatarProps {
    className?: string
    onDragText: string,
    acceptFile?: string
    onDropText: string,
    saveFile: (file: File) => void


}

const FileLoader = (props: ProfileLoadAvatarProps) => {
	const {
		onDragText,
		onDropText,
		saveFile,
		acceptFile,
		className
	} = props
	const refInput = useRef<HTMLInputElement | null>(null)
	const [drag, setDrag] = useState<boolean>(false)

	const onClickDropFile = useCallback(() => {
		refInput.current?.click()
	}, [])

	function onDragLeave(e: DragEvent) {
		e.preventDefault()
		setDrag(false)
	}

	const onDragOver = (e: DragEvent) => {
		e.preventDefault()
		setDrag(true)
	}
	const onDrop = (e: DragEvent) => {
		e.preventDefault()
		const file = e.dataTransfer.files[0]
		setDrag(false)
		if (file.type.indexOf('image/') === 0) {
			saveFile(file)
		}

	}
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.target.files && saveFile(e?.target.files[0])
	}
	return (
		<div className={classNames(cls.FileLoad, {}, [className!])}>
			<input
				accept={acceptFile}
				className={cls.input}
				type={'file'}
				ref={refInput}
				onChange={onChange}
			/>
			<div
				onDragLeave={onDragLeave}
				onDrop={onDrop}
				onDragOver={onDragOver}
				className={cls.dropFile}
				onClick={onClickDropFile}
			>
				<div>
					<Text fontSize={TextSize.L} align={TextAlign.CENTER} text={
						drag ?
							onDropText
						// drop your file here
							:
						// drag your file here
							onDragText
					}/>
				</div>
			</div>
		</div>
	)
}

export default FileLoader