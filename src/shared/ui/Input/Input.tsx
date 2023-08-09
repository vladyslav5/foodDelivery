import cls from './Input.module.scss'
import {ChangeEvent, InputHTMLAttributes, memo} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'

export enum InputTheme {
    PRIMARY = 'primary'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    theme?: InputTheme,
    value?: string,
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		theme,
		value,
		type='text',
		onChange,
		...othersProps
	}
        = props

	const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}
	return (
		<input
			{...othersProps}
			value={value}
			onChange={onChangeHandler}
			className={classNames(cls.Input, {}, [className!, cls[theme!]])}
		/>
	)
})
