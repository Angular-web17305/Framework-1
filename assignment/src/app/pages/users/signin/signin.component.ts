import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
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
 
  }, { validators: this.checkPasswords });

  constructor(private fb: FormBuilder, private auth: AuthService) {

  }

  checkPasswords(form: FormGroup) {
    const password = form.get('password')?.value;

  }
 onSubmit() {
   this.submitted = true;
   if (this.formSignin.valid) {
     this.auth.signin(this.formSignin.value).subscribe(data => {
       console.log(data);
     });
   }
 }
}
