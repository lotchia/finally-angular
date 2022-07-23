import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SignupViewModel } from 'src/app/Models/SignUpViewModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signupform !:FormGroup;
  constructor(private Formbuilder :FormBuilder ,private http :HttpClient ,private router:Router) { }

  ngOnInit(): void {
    this.signupform =this.Formbuilder.group({
        nameen:[''],
        namear:[''],
        email:[''],
        password:[''],
        confirmpassword:[''],
        country:[''],
        city:[''],
        street:[''],
        phone:[''],
        taxcard:['']
    })
  }
  signup(){
    let value = new SignupViewModel();
    value.namear = this.signupform.value["namear"]
    value.nameen = this.signupform.value["nameen"]
    value.email = this.signupform.value["email"]
    value.password = this.signupform.value["password"]
    value.confirmpassword = this.signupform.value["confirmpassword"]
    value.country = this.signupform.value["country"]
    value.city = this.signupform.value["city"]   
    value.street = this.signupform.value["street"]
    value.taxcard = this.signupform.value["taxcard"]
    value.phones.push(this.signupform.value["phone"]);


    this.http.post<any>("https://localhost:63000/Register/Marketer",value)
    .subscribe(res=>{
      console.log(res)
      alert("sign up success");
      this.router.navigateByUrl('account/login');

  },
  err=>console.log(err)
  )
  }

}
