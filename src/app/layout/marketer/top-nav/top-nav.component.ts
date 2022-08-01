import { Component, OnInit } from '@angular/core';
import { EditUserProfile } from 'src/app/Models/EditUserProfile';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketerService } from 'src/app/service/marketer.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  
 
  constructor(private profService:MarketerService) { }

  ngOnInit(): void {
    
this.profService.getProfileData().subscribe(res=>this.profService=res.data)
  }
logout(){
  
}
}
