import React from 'react'
import cls from './LoadingButton.module.scss'
import Button, {ButtonTheme} from 'shared/ui/Button/Button'
import {Loader, LoaderTheme} from 'shared/ui/Loader/Loader'

interface LoadingButtonProps {
    className?: string,
    onClick:()=>void,
    isLoading:boolean,
    text:string
}

export const LoadingButton = ({className,isLoading,onClick,text}: LoadingButtonProps) => {
	return (
		<Button
			className={className}
			onClick={onClick}
			theme={ButtonTheme.OUTLINE}
			disabled={isLoading}
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

