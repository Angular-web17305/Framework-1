import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interface/categoryes';
import { IProduct } from 'src/app/interface/product';
import { CategoryesService } from 'src/app/service/categoryes.service';
import { ProductService } from 'src/app/service/product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  products!: IProduct[];
  categoryes!: ICategory[];
  filteredProducts: any;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private categoryesService: CategoryesService,
    private http: HttpClient
  ) {
    this.categoryesService.getCategorys().subscribe((data) => {
      this.categoryes = data;
    });
  }
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.productService.getProducts().subscribe((data) => {
      this.filteredProducts = data;
    });
  }
  currentProduct() {
    this.productService.getProducts().subscribe((data) => {
      this.filteredProducts = data;
    });
  }
  selectCate(id: any) {
    const apiUrl = `http://localhost:3000/api/categoryes/${id}`;
    console.log(id);
    this.http.get(apiUrl).subscribe((res: any) => {
      this.filteredProducts = res.products;
    });
  }
}
