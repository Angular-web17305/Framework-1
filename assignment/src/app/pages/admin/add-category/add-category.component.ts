import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/categoryes';
import { CategoryesService } from 'src/app/service/categoryes.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categoryes!: ICategory[]

  productForm = this.formBuilder.group(
    {
      name: [''],
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
    const category: ICategory = {
      name: this.productForm.value.name || "",

    }

    this.categoryService.addCategory(category).subscribe(() => {
      alert("Thêm category thành công")
      this.router.navigateByUrl('/admin/category-management')
    })
  }
}

