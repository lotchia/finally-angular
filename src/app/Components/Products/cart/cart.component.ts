import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartEditViewModel, cartViewModel } from 'src/app/Models/cart';
import { ProductData } from 'src/app/Models/ProductViewModel';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import * as _ from 'underscore';
import { all } from 'underscore';
// { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: cartViewModel[]=[]
  public grandTotal :number =0;
  loading:boolean= true;
  public id : string=localStorage.getItem('id')??"";
  constructor(private cartservice : CartService,private orderservice :OrderService,private router:Router) { }

  ngOnInit(): void {
    
    this.cartservice.getProducts().subscribe
    (res=>{
      //console.log(res)
      this.products=res.data as cartViewModel[];
      this.grandTotal=this.cartservice.getTotalPrice();
      console.log(this.products);
    })
    
  scripts: [
    "node_modules/jquery/dist/jquery.min.js",
  ]
  }
  removeitem(id :number){
    this.loading=true;
    this.cartservice.removeCartItem(id).subscribe(res=>{
      if(res.success == true){
        // alert("sign up success");
        window.location.reload()
  }
  else{
  alert("Try Again!!!")
  }
    });
   
  }
  emptycart(){
    this.cartservice.removeAllCart();
  }
  order(){
 
    this.orderservice.order(this.id).subscribe(res=>{
      console.log(res);
    })
  }
  decreaseValue(Input : number,id:number,pID:number){
    let val =new  cartEditViewModel()
    val.ID = id;
    val.ProductID=pID;
    val.Quantity =--Input;
val.UserID = localStorage.getItem("id")??""

console.log(val)
   this.cartservice.updatequantity(val).subscribe(res=>{
      console.log(res)
      if(res.success ==true){
        window.location.reload()
      }
      else{
        alert(res.message)
      }
     })
     
  }
  
  increaseValue(Input : number,id:number,pID:number){
    let val =new  cartEditViewModel()
    val.ID = id;
    val.ProductID=pID;
    val.Quantity = ++Input;
val.UserID = localStorage.getItem("id")??""

   this.cartservice.updatequantity(val).subscribe(res=>{
      console.log(res)
if(res.success ==true){
  window.location.reload()
}
else{
  alert(res.message)
}
     })
     
  }
}
