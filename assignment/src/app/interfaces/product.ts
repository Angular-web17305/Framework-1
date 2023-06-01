export interface IProduct {
    id?: number,
    name: string,
    price: number,
    desc: string,
    image: string,
    cateID: number,
}

export interface ICategory {
    id?: number,
    name: string,
}
