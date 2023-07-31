import React, {type FC, type ReactNode, useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './SliderButton.module.scss'

type SliderProps = {
	className?: string;
	checked?: boolean;
	children?: ReactNode;
	onClick?:()=>void

};

export const SliderButton: FC<SliderProps> = props => {
	const {
		className,
		children,
		checked,
		onClick,
	} = props

	return (
		<div className={classNames(cls.Slider, {}, [className!])}>
			<label>
				<input type={'checkbox'} checked={checked} onChange={onClick}/>
				<span className={cls.fon}></span>
				<div className={cls.icon}>
					{children}
				</div>
			</label>
		</div>
	)
}
