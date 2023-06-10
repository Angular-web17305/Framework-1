import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/categoryes';
import { CategoryesService } from 'src/app/service/categoryes.service';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  public imageUrl: any;
  categoryes!: ICategory[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.categoryService.getCategorys().subscribe(data => this.categoryes = data)
  }
  productForm = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      desc: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
    }
  )
  async onHandleSubmit() {
    const productImg: any = document.getElementById('productImg');
    const cloud_name = "dwyycqczs";
    const preset_name = "upimg_angular";
    const folder_name = "ASM_2"
    const formData = new FormData();
    const file = productImg.files[0];
    formData.append(`file`, file);
    formData.append('upload_preset', preset_name);
    formData.append('cloud_name', cloud_name);
    formData.append('folder', folder_name);
    const res = await axios
      .post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formData)
      .then(res => res.data);
    this.imageUrl = await res.secure_url;

    const postData: any = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      desc: this.productForm.value.desc,
      image: this.imageUrl,
      categoryId: this.productForm.value.categoryId,
    }
    this.productService.addProduct(postData).subscribe(() => {
      alert("Them Thanh cong")
      this.router.navigateByUrl('/admin/product-management')
    })
  }
}
