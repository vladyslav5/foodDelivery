import cls from './Input.module.scss'
import {ChangeEvent, InputHTMLAttributes, memo} from 'react'
import {classNames, Mods} from 'shared/lib/helpers/classNames/classNames'

export enum InputTheme {
    PRIMARY = 'primary'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'| 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string,
    theme?: InputTheme,
    value?: string,
    onChange?: (value: string) => void
	readonly?:boolean
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		theme,
		value,
		type='text',
		onChange,
		readonly,
		disabled=false,
		...othersProps
	}
        = props

	const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const mods:Mods = {
		[cls.readonly]:readonly,
	}
	const additional:Array<string | undefined> = [
		className,
		cls[theme!],
	]
	return (
		<input
			{...othersProps}
			value={value}
			type={type}
			readOnly={readonly}
			onChange={onChangeHandler}
			className={classNames(cls.Input, mods, additional)}
		/>
	)
})
