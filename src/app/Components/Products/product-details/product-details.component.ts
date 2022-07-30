import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cartEditViewModel } from 'src/app/Models/cart';
import { ProductData } from 'src/app/Models/ProductViewModel';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductServices } from 'src/app/service/ProductServices';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productlist : any;
  id:any;
  productdetails :ProductData = new ProductData;
  searchtext :string ="";
    constructor(private route:ActivatedRoute ,private Productserv :ProductServices ,private cartservice :CartService) {
      this.id =this.route.snapshot.paramMap.get("id")
      console.log(this.id)
     }
    
    ngOnInit(): void {
      this.getProductById();
    }
    getProductById(){
      this.Productserv.getProductById(this.id).subscribe(res=>{
      this.productdetails=res.data.data;
      })
    }
    Onsearchtextchange(searchValue :string){
         this.searchtext=searchValue;
         console.log(this.searchtext)
    }
    addtocart(item :ProductData){
      let val  = new cartEditViewModel();
      val.ProductID  =item.id;
      val.UserID = localStorage.getItem("id")??""
      this.cartservice.addtocart(val).subscribe(res=>{
        console.log(res)
      });
   }
  }
  
  

