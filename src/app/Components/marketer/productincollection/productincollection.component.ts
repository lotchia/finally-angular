import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { faviourtService } from 'src/app/service/faviourt.service';

@Component({
  selector: 'app-productincollection',
  templateUrl: './productincollection.component.html',
  styleUrls: ['./productincollection.component.css']
})
export class ProductincollectionComponent implements OnInit {
  @Output() toggeleSidebarForMe :  EventEmitter<any> =new EventEmitter();
 
  public loading :boolean=false;
  public products:any=[];

  constructor(private api :ApiService,private faviourtService:faviourtService) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggeleSidebarForMe.emit()
    }
    getproduct(){
      this.loading=true;
    this.api.getproduct().subscribe(res=>{
      console.log(res)
      this.products =res;
      this.loading=false;
    });
  }
  removeitem(item :any){
    this.faviourtService.removeCartItem(item);
  }
  emptycart(){
    this.faviourtService.removeAllCart();
  }
}
