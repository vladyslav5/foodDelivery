import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './CardContentPreloader.module.scss'

interface CardContentPreloaderProps {
    className?: string
}

export const CardContentPreloader = ({className}: CardContentPreloaderProps) => {
	return (
		<div className={classNames(cls.CardContentPreloader, {}, [className!])}>
			<div className={cls.cardLoader}>
				<div className={cls.icon}></div>
				<div className={cls.text}></div>
			</div>
		</div>
	)
}
