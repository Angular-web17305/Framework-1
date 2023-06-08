import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/categoryes';
import { CategoryesService } from 'src/app/service/categoryes.service';
@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent {

   categorys!: ICategory[]
  constructor(private CategoryesService: CategoryesService) {
    CategoryesService.getCategorys().subscribe(data => this.categorys = data)
  }

  removeCate(id: number | string) {
    const result = window.confirm("Bạn muốn xóa sản phẩm!")
    if (result) {
      this.CategoryesService.deleteCategory(id).subscribe(() => {
        this.CategoryesService.getCategorys().subscribe(data => this.categorys = data)
      })
    }
  }
}
