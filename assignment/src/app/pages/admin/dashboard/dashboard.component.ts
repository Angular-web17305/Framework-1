import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products!: IProduct[]
  constructor(private productService: ProductService) {
    productService.getProducts().subscribe(data => this.products = data)
  }

  removeProduct(id: number) {
    const result = window.confirm("Bạn muốn xóa sản phẩm!")
    if (result) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.productService.getProducts().subscribe(data => this.products = data)
      })
    }
  }
}
