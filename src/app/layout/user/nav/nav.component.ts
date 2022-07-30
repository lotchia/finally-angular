import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/Account.service';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { faviourtService } from 'src/app/service/faviourt.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public totalItem :number =0;
 

  constructor(private cartservice :CartService,private apiservice : ApiService ,private faviourtservice:faviourtService ,
    private accountservice: AccountService){ }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe
    (res=>{
      this.totalItem=res.length;

     this.faviourtservice.getProducts().subscribe(res=>{
      this.totalItem=res.length;
     })
    })
  }


logout(){
 this.accountservice.logout().subscribe(res=>{
  console.log(res)
 });
}

   
  }


