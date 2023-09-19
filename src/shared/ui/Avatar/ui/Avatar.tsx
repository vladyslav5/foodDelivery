import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Avatar.module.scss'
import {CSSProperties, useMemo} from 'react'
import AvatarImg from 'shared/assets/AvatarImg.jpg'

interface AvatarProps {
    className?: string
    src?:string
    alt?:string,
	size?:number
}

export const Avatar = (props: AvatarProps) => {
	const {
		src,
		alt,
		size=150,
		className
	} = props
	const styles = useMemo<CSSProperties>(()=>{
		return {
			width:size,
			height:size
		}
	},[size])
	return (
		<img alt={alt} style={styles} src={src} className={classNames(cls.Avatar, {}, [className!])}/>
	)
}