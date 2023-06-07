// import { Component } from '@angular/core';
// import { AuthService } from 'src/app/service/auth.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// @Component({
//      selector: 'app-signin',
//     templateUrl: './signin.component.html',
//      styleUrls: ['./signin.component.css']
//    })
// export class SigninComponent {
//   submitted: boolean = false;
//   formSignin: FormGroup;

//   constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
//     this.formSignin = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.minLength(6)]],
//     }, { validators: this.checkPasswords });
//   }

//   checkPasswords(form: FormGroup) {
//     const password = form.get('password')?.value;
  
//   }

//   onSubmit() {
//     this.router.navigateByUrl('/home')
//     this.submitted = true;
//     if (this.formSignin.valid) {
//       this.authService.signin(this.formSignin.value).subscribe(data => {
//         console.log(data);
     
//       });
//     }
//   }
// }  


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  submitted: boolean = false;
  formSignin: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formSignin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formSignin.valid) {
      this.authService.signin(this.formSignin.value).subscribe(data => {
        console.log(data);
        const role = data.role;

        if (role === 'admin') {
          this.authService.setRole(role); 
          this.router.navigateByUrl('admin/product-management');
        } else {
          this.authService.setRole(role); 
          this.router.navigateByUrl('/home');
        }
      });
    }
  }
}
