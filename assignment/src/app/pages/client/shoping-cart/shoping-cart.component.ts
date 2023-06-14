import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct } from 'src/app/interface/product';
import { ICart, ICartItem } from 'src/app/interface/cart';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  // productInfo: ICartItem[] = [];
  // total: number = 0;
  carts: any[] = []
  constructor(private cartService: CartService) {
    this.carts = this.getCart();
  }
  
  getCart(): any {
    // Lưu vào local storage
    let cartJson = sessionStorage.getItem('cart')
    if (cartJson) {
      return JSON.parse(cartJson)
    } else {
      return []
    }
  }

  ngOnInit(): void {
    this.carts = this.cartService.getCart()
  }

  subtotal(cart: any) {
    return cart.quantity * cart.price
  }

  removeItem(item: any): void {
    const index = this.carts.indexOf(item);
    if (index >= 0) {
      this.carts.splice(index, 1);
      let cartJson = JSON.stringify(this.carts);
      sessionStorage.setItem('cart', cartJson);

    }
  }
  clearCart(): void {
    sessionStorage.removeItem('cart')
    this.carts = []
  }

  increaseQuantity(index: number) {
    this.carts[index].quantity += 1;
  }

  decreaseQuantity(index: number) {
    if (this.carts[index].quantity > 1) {
      this.carts[index].quantity -= 1;
    }
  }


  // getCartItems(): void {
  //   this.cartService.getCart().subscribe(
  //     (cart: ICart) => {
  //       this.productInfo = cart.products;
  //       this.total = cart.total;
  //     },
  //     (error: any) => {
  //       console.log('Error retrieving cart items:', error);
  //     }
  //   );
  // }

  // getTotal(): void {
  //   this.cartService.getCart().subscribe(cart => {
  //     this.total = cart.total;
  //   });
  // }
}