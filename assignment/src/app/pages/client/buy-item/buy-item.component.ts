import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ICategory } from 'src/app/interface/categoryes';
import { CategoryesService } from 'src/app/service/categoryes.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent {
  // product: IProduct[] = [];
  // constructor(private productService: ProductService) {
  //   this.productService.getProducts().subscribe(data => {
  //     this.product = data;
  //   });
  // }
}
