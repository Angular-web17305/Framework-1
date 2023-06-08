import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  removeProduct(id: any) {
    const result = window.confirm("Bạn muốn xóa sản phẩm!")
    if (result) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.productService.getProducts().subscribe(data => {
          this.products = data;
        });
      });
    }
  }
}

