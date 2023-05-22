import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Products';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService) {

  }
  onHandleSubmit() {
    console.log(this.product)
    this.productService.addProduct(this.product).subscribe((product) => {
      console.log('product', product);
    })
  }
}