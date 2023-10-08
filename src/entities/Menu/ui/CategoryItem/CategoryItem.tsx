import {classNames, Mods} from 'shared/lib/helpers/classNames/classNames'
import cls from './CategoryItem.module.scss'
import {Category} from '../../model/type/menu'
import {Text} from 'shared/ui/Text/Text'
import {Avatar} from 'shared/ui/Avatar/ui/Avatar'

interface CategoryProps {
    className?: string,
	category:Category
	onClick:(categoryId:number)=>void
	selected?:boolean
}

export const CategoryItem = (props: CategoryProps) => {
	const {
		category,
		onClick,
		className,
		selected
	} = props
	const mods:Mods = {
		[cls.selected]:selected
	}
	return (
		<div  onClick={()=>onClick(category.id)} className={classNames(cls.CategoryItem, mods, [className!])}>
			<div className={cls.icon}>
				<img src={category.icon}/>
			</div>
			<Text text={category.title}/>
		</div>
	)
}
