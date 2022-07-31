import { Component, OnInit } from '@angular/core';
import { collectionPro } from 'src/app/Models/CollectionProductViewModel';
import { ProductData } from 'src/app/Models/productViewModel';
import { collectionProducts } from 'src/app/service/collectionProducts.service';

@Component({
  selector: 'app-collection-products',
  templateUrl: './collection-products.component.html',
  styleUrls: ['./collection-products.component.css']
})
export class CollectionProductsComponent implements OnInit {
  collections:collectionPro[]=[];
  productList:ProductData[]=[];
  
  // searchtext :string ="";
  constructor(private collectionPproductService:collectionProducts) { }

  ngOnInit(): void {
    this.collectionPproductService.getProduct().subscribe(res=>this.productList=res.data.data as ProductData[])
  }
  check(id:number,e:any){
console.log(id,e)
  }
}
