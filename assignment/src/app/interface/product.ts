export interface IProduct {
    _id?: number | string
    name: string,
    price: number,
    desc: string,
    image: string,
    categoryId: number
}

export interface ICategory {
    id?: number,
    name: string,
}