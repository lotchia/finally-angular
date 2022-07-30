import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/Account.service';
import {UserUpdateViewModel}from 'src/app/Models/userupdateViewModel';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  id:any;
  userdetails :any =[];
  public updateform !: FormGroup;

  constructor(private Formbuilder :FormBuilder ,private accountservice :AccountService ,private router:Router) { }

  ngOnInit(): void {
  }
  getuserdetails(){
    this.accountservice.getinfo(this.id).subscribe(res=>{
      console.log(res)
    });
  }
  edit(){
    let value = new UserUpdateViewModel();
    value.userid= localStorage.getItem("id")??"";
    value.nameAr = this.updateform.value["nameAr"]
    value.nameEn = this.updateform.value["nameEn"]
    value.email = this.updateform.value["email"]
    value.password = this.updateform.value["password"]
    value.country = this.updateform.value["country"]
    value.city = this.updateform.value["city"]   
    value.street = this.updateform.value["street"]
    value.phones.push(this.updateform.value["phones"]);
  

    this.accountservice.edit(value)
    .subscribe(res=>{
      console.log(res)
      if(res.success == true){
              alert("Update success");
              this.router.navigateByUrl('/profile');
      }
      else{
        alert("Try Again!!!")
      }
        

  },
  err=>console.log(err)
  )
  }
  }
