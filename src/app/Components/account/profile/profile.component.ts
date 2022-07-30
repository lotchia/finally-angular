import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/Account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:any;
  userdetails :any =[];
  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
this.accountservice.getinfo(this.id).subscribe
(res=>{this.userdetails=res;
})

  }
  getinfo(){
    this.accountservice.getinfo(this.id).subscribe(res=>{
      console.log(res)
    });
  }
}
