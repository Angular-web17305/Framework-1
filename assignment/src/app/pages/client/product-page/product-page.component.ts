import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interface/categoryes';
import { IProduct } from 'src/app/interface/product';
import { CategoryesService } from 'src/app/service/categoryes.service';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent {
  products!: IProduct[]
  categoryes!: ICategory[]
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private categoryesService: CategoryesService
  ) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
    this.categoryesService.getCategorys().subscribe(data => {
      this.categoryes = data
    })
  }
}


