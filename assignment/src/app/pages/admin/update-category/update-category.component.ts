import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/categoryes';
import { IProduct } from 'src/app/interface/product';
import { CategoryesService } from 'src/app/service/categoryes.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  category:any

  productForm = this.formBuilder.group(
    {
      _id: ['', 0],
      name: [''],
    }
  )
  constructor(
    private productService: ProductService,
    private categoryService: CategoryesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private params: ActivatedRoute
  ) {
    //get all categoryes
    categoryService.getCategorys().subscribe(data => this.category = data)

    this.params.paramMap.subscribe(params => {
      const id = String(params.get('id'))
      this.categoryService.getCategory(id).subscribe(data => {
        this.category = data;
        this.productForm.patchValue({
          _id: data._id,
          name: data.name,

        })
      })
    })
  }

  onHandleSubmit() {
    const category: ICategory = {
      _id: this.productForm.value._id || 0 || "",
      name: this.productForm.value.name || "",

    }

    const result = window.confirm("Update sản phẩm")
    if (result) {
      this.router.navigateByUrl('/admin/category-management')
      this.categoryService.updateCategory(category).subscribe()
    }
  }

}



