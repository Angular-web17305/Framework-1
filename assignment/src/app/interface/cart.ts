import { IProduct } from "./product";

export interface ICartItem {
    productId: string | number;
    quantity: number;
    productInfo: IProduct;
  }
  
  export interface ICart {
    products: ICartItem[];
    total: number;
  }