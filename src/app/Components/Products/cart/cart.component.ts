import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[]
  public grandTotal :number =0;
  public id : any=localStorage.getItem('id');
  constructor(private cartservice : CartService,private orderservice :OrderService) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe
    (res=>{this.products=res;
           this.grandTotal=this.cartservice.getTotalPrice();
    })
  }
  removeitem(item :any){
    this.cartservice.removeCartItem(item);
  }
  emptycart(){
    this.cartservice.removeAllCart();
  }
  order(){
 
    this.orderservice.order(this.id).subscribe(res=>{
      console.log(res);
    })
  }
}
