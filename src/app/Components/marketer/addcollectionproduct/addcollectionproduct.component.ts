import { Component, OnInit } from '@angular/core';
import { MarketerService } from 'src/app/service/marketer.service';
import { HttpClient } from '@angular/common/http';
import { addcollectionViewModel } from 'src/app/Models/addcollectionViewMpdel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcollectionproduct',
  templateUrl: './addcollectionproduct.component.html',
  styleUrls: ['./addcollectionproduct.component.css']
})
export class AddcollectionproductComponent implements OnInit {
  public collectionform :FormGroup = new FormGroup([]);
  constructor(private marketer :MarketerService , private http :HttpClient ,private Formbuilder:FormBuilder ) { }

  ngOnInit(): void {

      this.collectionform =this.Formbuilder.group({
        MarketerID :[""] ,
        Code: [""] ,
        NameAr : [""]  ,
        NameEN : [""] 
  })
}
  addcollection()
  {
    let value = new addcollectionViewModel();
    value.MarketerID =this.collectionform.value["MarketerID"];
    value.Code=this.collectionform.value["Code"];
    value.NameAr=this.collectionform.value["NameAr"];
    value.NameEN =this. collectionform.value["NameEN"];
    this.http.post<any>("https://localhost:63000/collction/add",value)  
  }
}
