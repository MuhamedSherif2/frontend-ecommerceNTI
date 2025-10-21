export interface ISubCategory{
    name:string,
    category: string
}

export interface ICategory{
    name: string
}

export interface IResponse{
    message: string,
    data: string
}

export interface ISubCategoriesResponse{
    message: string,
    data: ISubCategory[]
}

export interface ICategoriesResponse {
    message: string,
    data: ICategory[]
}