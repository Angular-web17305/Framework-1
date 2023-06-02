export interface IProduct {
    id?: number,
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