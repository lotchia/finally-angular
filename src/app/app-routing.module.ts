import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketerMainLayoutComponent } from './layout/marketer/marketer-main-layout/marketer-main-layout.component';
import { UserMainLayoutComponent } from './layout/user/user-main-layout/user-main-layout.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MarketerPageComponent } from './Components/marketer-page/marketer-page.component';
import { CollectionComponent } from './Components/collection/collection.component';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
  {path:"",redirectTo:"user",pathMatch:"full"},
  {
    path: 'marketer',
    component: MarketerMainLayoutComponent,
    children: [
      { path: '', component: MarketerPageComponent},
      { path: 'collection', component: CollectionComponent},
    ]
  },
  {
    path: 'user',
    component: UserMainLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'product', component: ProductComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
