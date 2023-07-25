import React, {type FC, type ReactNode, useState} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Slider.module.scss'

type SliderProps = {
	className?: string;
	checked: boolean;
	setChecked: (checked: boolean) => void;
	children?: ReactNode;

};

export const Slider: FC<SliderProps> = props => {
	const {
		className,
		children,
		checked,
		setChecked,
	} = props
	return (
		<div className={classNames(cls.Slider, {}, [className!])}>
			<label>
				<input type={'checkbox'} checked={checked} onChange={e => {
					setChecked(e.target.checked)
				}}/>
				<span className={cls.fon}></span>
				<div className={cls.icon}>
					{children}
				</div>
			</label>
		</div>
	)
}
