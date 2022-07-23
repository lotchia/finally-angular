import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketerMainLayoutComponent } from './layout/marketer/marketer-main-layout/marketer-main-layout.component';
import { UserMainLayoutComponent } from './layout/user/user-main-layout/user-main-layout.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MarketerPageComponent } from './Components/marketer-page/marketer-page.component';
import { CollectionComponent } from './Components/collection/collection.component';
import { AddcollectionproductComponent } from './Components/marketer/addcollectionproduct/addcollectionproduct.component';
import { ProductincollectionComponent } from './Components/marketer/productincollection/productincollection.component';
import { WalletComponent } from './Components/marketer/wallet/wallet.component';
import { ProtuctchossebymarketerComponent } from './Components/marketer/protuctchossebymarketer/protuctchossebymarketer.component';

const routes: Routes = [
  {path:"",redirectTo:"user",pathMatch:"full"},
  {
    path: 'marketer',
    component: MarketerMainLayoutComponent,
    children: [
      { path: '', component: MarketerPageComponent},
      { path: 'collection', component: CollectionComponent},
      { path:'addcollectionproduct',component:AddcollectionproductComponent},
      {path:'productincollection',component:ProductincollectionComponent},
      {path:'wallet',component:WalletComponent},
      {path:'chooseproduct',component:ProtuctchossebymarketerComponent},

    ]
  },
  {
    path: 'user',
    component: UserMainLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
