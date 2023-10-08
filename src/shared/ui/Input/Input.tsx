import cls from './Input.module.scss'
import {ChangeEvent, InputHTMLAttributes, memo} from 'react'
import {classNames, Mods} from 'shared/lib/helpers/classNames/classNames'

export enum InputTheme {
    PRIMARY = 'primary',
	PRIMARY_INVERTED = 'primaryInverted'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'| 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string,
    theme?: InputTheme,
	squared?:boolean
	value?: string | number,
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
		squared=false,
		disabled=false,
		...othersProps
	}
        = props

	const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const mods:Mods = {
		[cls.readonly]:readonly,
		[cls.squared]:squared
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
