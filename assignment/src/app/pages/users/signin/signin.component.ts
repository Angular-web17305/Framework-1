// import { Component } from '@angular/core';
// import { AuthService } from 'src/app/service/auth.service';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SigninComponent {
//   submitted: boolean = false;
//   formSignin = this.fb.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.minLength(6)]],
//   });

//   auth: AuthService; // Khai báo kiểu dữ liệu cho biến auth

//   constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
//     this.auth = authService; // Khởi tạo biến auth trong constructor
//   }

//   onSubmit() {
//     this.submitted = true;
//     if (this.formSignin.valid) {
//       console.log(1);
//       this.auth.signin(this.formSignin.value).subscribe((data: any) => {
//         localStorage.setItem('user', JSON.stringify(data));
//       });
//     }
//   }
// }
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  submitted: boolean = false;
  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6)]],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  onSubmit() {
    this.submitted = true;
    if (this.formSignin.valid) {
      this.authService.signin(this.formSignin.value).subscribe((data: any) => {
        this.localStorage.store('user', JSON.stringify(data)); // Lưu dữ liệu vào localStorage

        // Xác định vai trò của người dùng dựa trên dữ liệu nhận được
        const userRole = data.user.role;
        console.log(data.user.role);
        if (userRole === 'admin') {
          // console.log("save session for admin")
          // sessionStorage.setItem("user", Json data.user)
          this.router.navigate(['admin/product-management']);
        } else {
          this.router.navigate(['/home']);
        }
      });
    }
  }
}

