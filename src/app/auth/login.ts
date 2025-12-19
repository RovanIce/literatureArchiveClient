import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth-service';
import { LoginRequest } from './login-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login implements OnInit {
  constructor(private authService: AuthService, private router: Router){
  }
  form!: UntypedFormGroup;
  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      username : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }
  onSubmit():void{
    let loginrequest = <LoginRequest>{
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value
    }
    this.authService.Login(loginrequest).subscribe({
      next: result => {
        console.log(result);
        this.router.navigate(['/']);
      },
      error: result =>{
        console.log("error"+ result);
      }
    })
  }
}
