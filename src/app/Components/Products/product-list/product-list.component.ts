// import { Component, OnInit } from '@angular/core';
// import { ProudctViewModel } from 'src/app/Models/ProductViewModel';
// import { ProductServices } from 'src/app/service/ProductServices';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {

//    productids : number []=[];
//   constructor( private productserve:ProductServices) { }
//   product: ProudctViewModel =new ProudctViewModel()
//   Data :  [] =[];
//  loading : boolean= true



//   ngOnInit(): void {


//     this.loading=true
//     this.productserve.GetProduct().subscribe(

//    i=> {
//       this.Data=i.Data
//       this.loading=false
//     }
//    );




//   }





//   add(id:number){


//   }

// }



import { Component, OnInit } from '@angular/core';
import { categoryViewModel } from 'src/app/Models/categoryViewModel';
import { FavouriteEditViewModel } from 'src/app/Models/FavouriteViewModel';
import { ProductData } from 'src/app/Models/ProductViewModel';
import { VendorBrandViewModel } from 'src/app/Models/vendorBrandViewModel';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { faviourtService } from 'src/app/service/faviourt.service';
import { ProductServices } from 'src/app/service/ProductServices';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  page: number = 1; //current page number
  count: number = 1; //total pages
  //number of elements to get form database per request
  tableSize: number = 6;

  public productlist: ProductData[] = [];
  public categorieslist: categoryViewModel[] = [];
  public brandslist: VendorBrandViewModel[] = [];
  public loading: boolean = false;
  issearching = false;
  isfilter = false;

  constructor(private api: ApiService, private cartservice: CartService, private faviourtService: faviourtService,
    private productservice: ProductServices) { }

  ngOnInit(): void {

    this.getproduct()
    this.getallcategories()
    this.getallbrands()
  }

  getallcategories() {
    this.productservice.getallcategories().subscribe(res => {
      // console.log(res)
      this.categorieslist = res.data as categoryViewModel[];

    })
  }
  getallbrands() {
    this.productservice.getallbrands().subscribe(res => {
      console.log(res)
      this.brandslist = res.data as VendorBrandViewModel[];

    })
  }

  filterBrand(userID :string){
    this.page = 1;
    console.log(userID)
    this.productservice.getproductbyVendor(userID).subscribe(res => {
      console.log(res)
      this.productlist = res.data.data;
      this.page = res.data.pageIndex;
      this.tableSize = res.data.pageSize;
      this.count = res.data.count;
    })
  }
  filtercategoty(Catid: number) {
    this.page = 1;
    console.log(Catid)
    this.productservice.getproductbycategoty(Catid).subscribe(res => {
      console.log(res)
      this.productlist = res.data.data;
      this.page = res.data.pageIndex;
      this.tableSize = res.data.pageSize;
      this.count = res.data.count;
    })

  }

  filter(value: string) {
    this.productlist = []
    this.loading = true;
    this.productservice.searchProduct(value).subscribe(res => {
      // console.log(res)
      this.productlist = res.data.data
      this.page = res.data.pageIndex;
      this.tableSize = res.data.pageSize;
      this.count = res.data.count;
      this.loading = false;
    }
    )
  }
  getproduct() {
    this.loading = true;
    this.productservice.GetProduct(this.page, this.tableSize).subscribe(res => {
      console.log(res)
      this.productlist = res.data.data as ProductData[];
      this.page = res.data.pageIndex;
      this.tableSize = res.data.pageSize;
      this.count = res.data.count;
      this.loading = false;
    }, error => {
      // alert("error")
    }
    )
  }
  addtofavourit(item: ProductData) {
    let data = new FavouriteEditViewModel;
    data.ProductID = item.id;
    data.UserID = localStorage.getItem("id") ?? "";
    this.faviourtService.addtofaviourt(data).subscribe(res => {
    });
  }

  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
    this.getproduct()

  }

}
