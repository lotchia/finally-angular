import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginViewModel } from 'src/app/Models/LoginViewModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginform !: FormGroup;
  constructor(private formbuilder:FormBuilder , private http:HttpClient ,private router :Router) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      Email: ["",[Validators.required,Validators.pattern("[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}")]],
      Password:["",Validators.required],
      RememberMe:[false]

    })
  }
  login(){
    let value = new LoginViewModel()
    value.Email = this.loginform.value['Email']
    value.Password = this.loginform.value['password']
    value.RememberMe=this.loginform.value["RememberMe"]

    this.http.post<any>("https://localhost:63000/User/SignIn",value).
    subscribe(res=>
      {
       
        alert("success");
        this.router.navigate(['home'])
      })

      // this.Account.login(log).subscribe(res=>{
      //   if(res.message=="Done"){
      //     // localStorage.setItem('Token',JASON.stringfy());
      //     localStorage.setItem('username',log.Email);
      //     // localStorage.setItem('RememberMe',res.rememberMe);
    
    let obj:{
      Token:any,
      ReturnUrl :string,
      RememberMe:string,
      message:String
    } = JSON.parse(localStorage.getItem("Token")!)
    console.log(obj.Token)
   
    
      
        this.router.navigateByUrl('/Create')
        // clearTimeout(res.Token)
      }
      // else
      // alert('Wrong Email or Password !!  ')
      
    }
 
  
