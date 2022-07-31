import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/Account.service';
import { CartService } from 'src/app/service/cart.service';
import { faviourtService } from 'src/app/service/faviourt.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public totalItemfav :number =0;
  public totalItemcar :number =0;
 
  public id : string=localStorage.getItem('id')??"";
  constructor(private cartservice :CartService,private faviourtservice:faviourtService ,
    private accountservice: AccountService){ }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe
    (res=>{
      this.totalItemcar=res.data.length;

    
    })
      
    this.faviourtservice.getProducts(this.id).subscribe(res=>{
      this.totalItemfav=res.data.length;
     })
  }


logout(){
 this.accountservice.logout().subscribe(res=>{
  console.log(res)
 });
}

   
  }


