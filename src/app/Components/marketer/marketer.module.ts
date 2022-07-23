import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { WalletComponent } from './wallet/wallet.component';
import { SharedModule } from 'src/app/shard/shared.module';
import { ProductincollectionComponent } from './productincollection/productincollection.component';
import { ProtuctchossebymarketerComponent } from './protuctchossebymarketer/protuctchossebymarketer.component';
import { AddcollectionproductComponent } from './addcollectionproduct/addcollectionproduct.component';

let routes:Routes=[
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'wallet',component:WalletComponent},
  {path:'collection',component:CollectionComponent},
  {path:'collectioninproduct' ,component:ProductincollectionComponent },
  {path:'protuctchossebymarketer',component:ProtuctchossebymarketerComponent},
  {path:'addcollectionproduct' ,component:AddcollectionproductComponent}
 
]

@NgModule({
  declarations: [
    WalletComponent,
    CollectionComponent,
   ProductincollectionComponent,
   ProtuctchossebymarketerComponent,
   AddcollectionproductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    
    RouterModule.forChild(routes)
  ]
  ,
  exports:[
    RouterModule
  ]
})
export class MarketerModule { }
