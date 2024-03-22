import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private toast: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      C_password: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required]
      // gender: ['', Validators.required]
    });

  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Perform registration logic here
      console.log('Form submitted successfully');
     // alert('Registration Successfully!');
     this.toast.success("Registeration successfull!!!","Success");
      console.log(this.registerForm.value);
      this.router.navigate(['/login']);
    } else {
      // Form is invalid
      console.error('Form is invalid');
     // alert('Registration Failed!');
     this.toast.error("Registeration Failed!!!","Error");
    }
  }

}
