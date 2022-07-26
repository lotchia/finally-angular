import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
public productlist:any;
  public categorieslist:any;
  constructor(private api :ApiService ,private http : HttpClient) { }

  ngOnInit(): void {
  }

  getallcategories(){
   
    this.api.getallcategories().subscribe(res=>{
      console.log(res)
      this.categorieslist=res;
     
    })
  }

  getproduct()
  {
    return this.http.get<any>("https://localhost:63000/Api/Getproduct")
    // .pipe(map((res:any)=>{
    //  console.log(res)
    // } 
 
  }
  filtercategoty(event :any){
    let value =event.target.value;
    if(value=='all'){
     this.getproduct
    }else{
    this.getproductbycategoty(value)
  }
} 
  getproductbycategoty(keyword:string)
  {
    this.api.getproductbycategoty(keyword).subscribe(res=>{
       this.productlist=res;
    })
  }
 
}
