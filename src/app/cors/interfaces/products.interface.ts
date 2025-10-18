export interface IProduct{
    _id:string,
    title: string,
    description: string,
    img: File,
    price: number,
    category: string,
    subcategory: string,
    slug: string,
}

export interface IProductsResponse{
    message:string,
    data:IProduct[]
}

export interface IProductRes{
    message:string;
    data:IProduct;
}