import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResultViewModel, LoginViewModel } from '../../../Models/Acount';
import { AccountService } from '../../../service/Account.service';

@Component({
  selector: 'app-marketer-sign-in',
  templateUrl: './marketer-sign-in.component.html',
  styleUrls: ['./marketer-sign-in.component.css']
})
export class MarketerSignInComponent implements OnInit {

  constructor(private builder:FormBuilder,private Account:AccountService,private router:Router) { }
  form:FormGroup=new FormGroup([]);
  ngOnInit(): void {
    this.form=this.builder.group({
Email:['',[Validators.required],Validators.email],
Password:['',[Validators.required]],
RememberMe:[true],
    });
  }
  login(){
    let SignIn = new LoginViewModel();
    SignIn.Email=this.form.value["Email"];
    SignIn.Password=this.form.value["Password"];
    SignIn.RememberMe=this.form.value["RememberMe"];
    console.log(SignIn);

    this.Account.login(SignIn).subscribe(res=>{
      console.log(res)
      if (res.success){
        console.log(res)
        localStorage.setItem("token",res.token)
        localStorage.setItem("id",res.id)
        localStorage.setItem("role",res.role)
        localStorage.setItem("username",SignIn.Email)
        
        this.router.navigateByUrl('/marketer/home')
      }
      else{
        console.log(res)
        alert("Try again please")
        
      }
    })
  }
}
