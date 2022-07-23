import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MarketerService } from 'src/app/service/marketer.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  @Output() toggeleSidebarForMe :  EventEmitter<any> =new EventEmitter();
  id:any;
  public infmarketer:any=[]
  public signupform !:FormGroup;
  constructor(private route:ActivatedRoute ,private marketer :MarketerService,private Formbuilder:FormBuilder) {
    this.id =this.route.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.signupform =this.Formbuilder.group({
      nameen:[''],
      namear:[''],
      email:[''],
      password:[''],
      confirmpassword:[''],
      country:[''],
      city:[''],
      street:[''],
      phone:[''],
      texcard:['']
  })
  }
  toggleSidebar(){
    this.toggeleSidebarForMe.emit()
    }
    
  getmarketerById(){
    this.marketer.getmarketerById(this.id).subscribe(res=>{
    console.log(res)
    })
    
  }
  updatemarketer(){
     this.marketer.updatemarketer().subscribe(res=>{
       this.infmarketer=res
     })
   }

}
