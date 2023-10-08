import {Product} from 'entities/Product'

export interface MenuSchema{
    categories:Category[]
    products:Product[]
    selectedCategory?:Category,
    isLoadingCategories:boolean,
    isLoadingProducts:boolean,
    error?:string,
}


export interface Category {
    id:number
    icon:string
    title:string
}