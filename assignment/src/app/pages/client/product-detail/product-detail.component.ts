import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ICategory } from 'src/app/interface/categoryes';
import { CategoryesService } from 'src/app/service/categoryes.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2'
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct
  products: IProduct[] = []
  categories: ICategory[] = [];
  carts: any = []
  title = ""
  constructor(
    private productService: ProductService,
    private categoryService: CategoryesService,
    private cartService: CartService,
    private params: ActivatedRoute,
    private router: Router
  ) {
    this.params.paramMap.subscribe(params => {
      const id = String(params.get('id'))
      this.productService.getProduct(id).subscribe(data => this.product = data)
    })
  }


  ngOnInit(): void {
    this.carts = this.cartService.getCart()
    this.categoryService.getCategorys().subscribe(data => {
      this.categories = data
    })
    this.productService.getProducts().subscribe(data => {
      this.products = data
    },
      error => {
        console.log(error);
      })
  }

  addToCart(products: IProduct) {
    let index = this.carts.findIndex((item: any) => item.id === products._id)
    if (index >= 0) {
      this.carts[index].quantity += 1;
    } else {
      let cartItem: any = {
        id: products._id,
        name: products.name,
        price: products.price,
        image: products.image,
        quantity: 1,
        subtotal: function () {
          return this.price * this.quantity
        }
      }
      this.carts.push(cartItem)
    }

    // Lưu vào local storage
    let cartJson = JSON.stringify(this.carts)
    sessionStorage.setItem('cart', cartJson)
    Swal.fire({
      title: "Thêm vào giỏ hàng thành công",
      icon: 'success'
    })
    this.router.navigate(["/cart"])
  }

  // addToCart(product: IProduct) {
  //   // console.log(product);
  //   // console.log(this.quantity);
  //   this.cartService.getCart(product, this.quantity).subscribe(cart => {
  //     console.log(cart)
  //   });
  //   this.router.navigate(['/cart'])
  // }
  // addToCart(product: IProduct) {
  //   this.cartService.addToCart(product, this.quantity).subscribe(cart => {
  //     console.log(cart); // Xử lý dữ liệu giỏ hàng như cần thiết
  //   });
  //   this.router.navigate(['/cart']);
  // }

}
