export interface Profile{
    username: string
    id: number,
    avatar: string
}

export interface ProfileSchema{
    data?:Profile
    isLoading:boolean
    error?:string
    readonly :boolean
}