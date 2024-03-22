import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { login } from '../../../shared/models/login';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  model: login = { Email: 'admin@gmail.com', Password: 'admin123' };
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  order: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService
  ) {
    this.order = this.router.getCurrentNavigation()?.extras.state;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required,Validators.email]],
      Password: ['',[ Validators.required,Validators.minLength(6)]],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.valid) {
      if(this.loginForm.value.Email=="admin123@gmail.com" && this.loginForm.value.Password=="password")
     { this.model.Email = this.loginForm.get('Email')?.value;
      this.model.Password = this.loginForm.get('Password')?.value;
      this.toast.success('Login Success', 'Success');

      this.router.navigate(['/']);
    }
    else{
      console.log(this.loginForm.value.Email);
      this.toast.error('Login Failed', 'Error!!');
  
     }
    }
   else{
    this.toast.error('Please, check email or password', 'Error!!');

   }

  }
    

  }

  // onLogin() {

  //   this.model.Email = this.loginForm.get('admin@gmail.com')?.value
  //   this.model.Password = this.loginForm.get('admin123')?.value
  //     .subscribe({
  //       next: (data: any) => {


  //         console.log(this.loginForm);
  //         alert('login success!');
  //         this.router.navigate(['/']);
  //       }, error: () => {

  //         alert('login failed');
  //       }
  //     })

  // }

