import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent {
  products!: IProduct[]
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }
}


