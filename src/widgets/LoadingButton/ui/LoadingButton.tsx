import React, {MouseEventHandler} from 'react'
import cls from './LoadingButton.module.scss'
import Button, {ButtonProps, ButtonTheme} from 'shared/ui/Button/Button'
import {Loader, LoaderTheme} from 'shared/ui/Loader/Loader'

interface LoadingButtonProps extends ButtonProps {
    className?: string,
    onClick:MouseEventHandler<HTMLButtonElement> | undefined;
    isLoading?:boolean,
    text:string,
	disabled?:boolean
}

export const LoadingButton = (props: LoadingButtonProps) => {
	const {
		className,
		isLoading,
		onClick,
		text,
		disabled=false,
		...otherProps

	}= props
	return (
		<Button
			className={className}
			onClick={onClick}
			theme={ButtonTheme.OUTLINE}
			disabled={isLoading || disabled}
			{...otherProps}
		>
			{
				isLoading
					?
					<div className={cls.loader}>
						<Loader theme={LoaderTheme.SMALL}/>
					</div>
					:
					text
			}
		</Button>
	)
}

