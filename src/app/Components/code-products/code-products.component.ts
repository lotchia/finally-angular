import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionCodeViewModel } from 'src/app/Models/CollectionCodeViewModel';
import { ProductData } from 'src/app/Models/productViewModel';
import { CollectionService } from 'src/app/service/collection.service';

@Component({
  selector: 'app-code-products',
  templateUrl: './code-products.component.html',
  styleUrls: ['./code-products.component.css'],
})
export class CodeProductsComponent implements OnInit {
  public productlist: ProductData[] = [];

  constructor(
    private builder: FormBuilder,
    private collectionCode: CollectionService,
    private router: Router
  ) {}
  form: FormGroup = new FormGroup([]);

  ngOnInit(): void {
    this.form = this.builder.group({
      Code: ['', [Validators.required]],
    });
  }
  Get() {
    let CollectionCode = new CollectionCodeViewModel();
    CollectionCode.Code = this.form.value['Code'];
    this.collectionCode.GetCollectionByCode(CollectionCode).subscribe((res) => {
      console.log(res);
      if (res.success == true) {
        this.productlist = res.data as ProductData[];
      }
    });
  }
  order() {
    let CollectionCode = new CollectionCodeViewModel();
    CollectionCode.Code = this.form.value['Code'];
    CollectionCode.UserId = localStorage.getItem('id') ?? '';
    this.collectionCode.Order(CollectionCode).subscribe(res=>{
      console.log(res)
    });
  }
}
