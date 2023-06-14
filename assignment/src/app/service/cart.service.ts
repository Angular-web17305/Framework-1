import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICart, ICartItem } from '../interface/cart';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  // private apiUrl = 'http://localhost:3000/api';
   constructor(private http: HttpClient) { }
  getCart() {
    // lưu local
    let cartJson = sessionStorage.getItem('cart')
    if(cartJson){
      return JSON.parse(cartJson)
    }else{
      return []
    }
  }


  // addToCart(product: IProduct, quantity: number): Observable<ICart> {
  //   const cartItem: ICartItem = {
  //     productId: product._id || '',
  //     quantity: quantity,
  //     productInfo: product
  //   };

  //   return this.http.post<ICart>(`${this.apiUrl}/cart`, cartItem);
  // }

}







