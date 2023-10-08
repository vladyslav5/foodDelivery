import React, {useCallback, useEffect} from 'react'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import cls from './Menu.module.scss'
import {useSelector} from 'react-redux'
import {getMenuProducts} from '../../model/selectors/getMenuProducts/getMenuProducts'
import {CategoryItem} from '../CategoryItem/CategoryItem'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {getMenuSelectedCategory} from 'entities/Menu/model/selectors/getMenuSelectedCategory/getMenuSelectedCategory'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {menuActions, menuReducer} from '../../model/slice/menuSlice'
import {getMenuCategories} from '../../model/selectors/getMenuCategories/getMenuCategories'
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {fetchCategories} from '../../model/services/fetchCategories/fetchCategories'
import {getMenuIsLoadingCategories} from '../../model/selectors/getMenuIsLoadingCategories/getMenuIsLoadingCategories'
import {Loader} from 'shared/ui/Loader/Loader'
import {fetchProductsByCategoryId} from '../../model/services/fetchProductsByCategoryId/fetchProductsByCategoryId'
import {getMenuIsLoadingProducts} from '../../model/selectors/getMenuIsLoadingProducts/getMenuIsLoadingProducts'
import {ProductList} from '../ProductList/ProductList'
import {CardContentPreloader} from 'shared/ui/CardContentPreloader/ui/CardContentPreloader'
import {getMenuError} from '../../model/selectors/getMenuError/getMenuError'
import {useTranslation} from 'react-i18next'

interface MenuProps {
    className?: string
}

const reducers: ReducerList = {
	menu: menuReducer

}
const Menu = ({className}: MenuProps) => {
	const dispatch = useAppDispatch()
	const error = useSelector(getMenuError)
	const categories = useSelector(getMenuCategories)
	const selectedCategory = useSelector(getMenuSelectedCategory)
	const onSelectCategory = useCallback((categoryId: number) => {
		dispatch(menuActions.setSelectedCategory(categoryId))
	}, [dispatch])
	const products = useSelector(getMenuProducts)
	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchCategories())
		}
	}, [dispatch])
	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			selectedCategory?.id && dispatch(fetchProductsByCategoryId(selectedCategory.id))
		}
	}, [dispatch, selectedCategory])
	const isLoadingCategories = useSelector(getMenuIsLoadingCategories)
	const isLoadingProducts = useSelector(getMenuIsLoadingProducts)
	const {t} = useTranslation('main')

	if (isLoadingCategories) {
		return (
			<div className={classNames(cls.categoriesLoading, {}, [className!])}>
				<Loader/>
			</div>
		)
	}
	if(error){
		return <div className={classNames(cls.Menu, {}, [className!])}>
			<Text title={'Error'} className={cls.error} theme={TextTheme.ERROR} text={t('There\'s a problem loading this page')}/>
		</div>
	}
	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.Menu, {}, [className!])}>
				<Text title={'Menu'}/>
				<div className={cls.categories}>
					{
						categories.map(category => <CategoryItem selected={category.id === selectedCategory?.id}
							onClick={onSelectCategory} key={category.title}
							category={category}/>)
					}
				</div>
				<div className={cls.products}>
					{
						isLoadingProducts
							?
							<div className={cls.preload}>
								<CardContentPreloader/>
								<CardContentPreloader/>
								<CardContentPreloader/>
							</div>
							:
							<ProductList products={products}/>
					}
				</div>
			</div>
		</DynamicModuleLoader>
	)
}
export default Menu