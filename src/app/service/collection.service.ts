import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http : HttpClient) { }

  getcollection(id:any)
  {
    return this.http.get<any>("https://localhost:63000/Collection/ProductWithCollection"+id)
    .pipe(map((res:any)=>{
      return res
    } 
    ))
  }
  getproduct()
  {
    return this.http.get<any>("https://localhost:63000/Product/GetProductWithCollection")
    .pipe(map((res:any)=>{
      return res
    } 
    ))
  }
  addcollection()
  {
    return this.http.get<any>("https://localhost:63000/Product/GetProductWithCollection")
    .pipe(map((res:any)=>{
      return res

  }
    ))
}
}
