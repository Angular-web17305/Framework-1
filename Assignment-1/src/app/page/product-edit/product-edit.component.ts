import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Products';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  // constructor(private productService: ProductService) {

  // }
  // onHandleSubmit() {
  //   console.log(this.product)
  //   this.productService.addProduct(this.product).subscribe((product) => {
  //     console.log('product', product);
  //   })
  // }
  constructor(private router: ActivatedRoute, private productService: ProductService,) {
    this.router.paramMap.subscribe((params => {
      const id = Number(params.get('id'));
      this.productService.getProduct(id).subscribe(data => {
        this.product = data;
      }, error => console.log(error.message))
    }))
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.product).subscribe((product) => {
      console.log('product', product);
    })
  }
}
