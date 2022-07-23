import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-protuctchossebymarketer',
  template:'./protuctchossebymarketer.component.html',
  styleUrls: ['./protuctchossebymarketer.component.css']
})
export class ProtuctchossebymarketerComponent implements OnInit {
  public productlist : any;
  public loading :boolean=false
  constructor(private api :ApiService) { }

  ngOnInit(): void {
  }
  filter(value:string){
    this.loading=true;
    this.api.searchProduct(value).subscribe(res=>{
 
      this.productlist =res
      this.loading=false;
    }
      )
  }

  getproduct(){
    this.loading=true;
  this.api.getproduct().subscribe(res=>{
    console.log(res)
    this.productlist =res;
    this.loading=false;
 
    this.productlist.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
  }
  )}
  addproduct(item :any)
  {
    
  }
}
