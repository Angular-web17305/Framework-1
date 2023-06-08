import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/categoryes';
import { CategoryesService } from 'src/app/service/categoryes.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  categoryes!: ICategory[]

  productForm = this.formBuilder.group(
    {
      name: [''],
      price: [0],
      desc: [''],
      image: [''],
      categoryId: [0]
    }
  )

  constructor(
    private productService: ProductService,
    private categoryService: CategoryesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.categoryService.getCategorys().subscribe(data => this.categoryes = data)
  }


  onHandleSubmit() {
    const product: IProduct = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      desc: this.productForm.value.desc || "",
      image: this.productForm.value.image || "",
      categoryId: this.productForm.value.categoryId || 0 || "",
    }

    this.productService.addProduct(product).subscribe(() => {
      alert("Thêm sản phẩm thành công")
      this.router.navigateByUrl('/admin/product-management')
    })
  }
}
