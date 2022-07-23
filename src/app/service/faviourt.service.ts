import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class faviourtService {
  public faviourtItemList :any =[]
  public ProductList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.ProductList.asObservable();
  }

  setProduct(Product :any){
    this.faviourtItemList.push(...Product);
    this.ProductList.next(Product);
  }
  addtofaviourt(Product:any){
    this.faviourtItemList.push(Product);
    this.ProductList.next(this.faviourtItemList);
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
