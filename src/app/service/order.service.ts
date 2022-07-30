import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
public userid:any=[];
public orderid:any=[];
  constructor(private http:HttpClient) { }


  order(userid:string){
  
    return this.http.post<any>("https://localhost:63000/Order/Add",userid)
  }
  orderdetails(orderid:string){
    return this.http.get<any>("https://localhost:63000/OrderDetails/Add")
  }
}
