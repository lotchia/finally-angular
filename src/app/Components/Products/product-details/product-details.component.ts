import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cartEditViewModel } from 'src/app/Models/cart';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productlist : any;
  id:any;
  productdetails :any =[];
  searchtext :string ="";
    constructor(private route:ActivatedRoute ,private Api :ApiService ,private cartservice :CartService) {
      this.id =this.route.snapshot.paramMap.get("id")
      console.log(this.id)
     }
    
    ngOnInit(): void {
      this.getProductById();
    }
    getProductById(){
      this.Api.getProductById(this.id).subscribe(res=>{
      this.productdetails=res
      })
    }
    Onsearchtextchange(searchValue :string){
         this.searchtext=searchValue;
         console.log(this.searchtext)
    }
    addtocart(item :cartEditViewModel){
      this.cartservice.addtocart(item).subscribe(res=>{
        console.log(res)
      });
   }
  }
  
  

