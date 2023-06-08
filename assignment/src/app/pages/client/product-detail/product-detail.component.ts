import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: IProduct
  constructor(
    private productService: ProductService,
    private params: ActivatedRoute
  ) {
    this.params.paramMap.subscribe(params => {
      const id = String(params.get('id'))
      this.productService.getProduct(id).subscribe(data => this.product = data)
    })
  }
}
