import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavouriteEditViewModel, FavouriteViewModel } from '../Models/FavouriteViewModel';

@Injectable({
  providedIn: 'root'
})
export class faviourtService {
  public faviourtItemList :any =[]
  public ProductList = new BehaviorSubject<any>([]);

  constructor(private http : HttpClient) { }
  // getProducts(){
  //   return this.ProductList.subscribe();
  // }

  setProduct(Product :any){
    this.faviourtItemList.push(...Product);
    this.ProductList.next(Product);
  }
  addtofaviourt(Product:FavouriteEditViewModel){
    // this.faviourtItemList.push(Product);
    // this.ProductList.next(this.faviourtItemList);
    return this.http.post<FavouriteViewModel>("https://localhost:63000/Favourite/Add",Product)
  }
  removeCartItem(Product:any){
    this.faviourtItemList.map((a:any,index:any)=>{
      if(Product.id===a.id){
        this.faviourtItemList.splice(index,1);
      }
    })
    this.ProductList.next(this.faviourtItemList);
  }
  removeAllCart(){
    this.faviourtItemList=[]
    this.ProductList.next(this.faviourtItemList);
  }
}
