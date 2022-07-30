
import { MarketerMainLayoutComponent } from './layout/marketer/marketer-main-layout/marketer-main-layout.component';
import { UserMainLayoutComponent } from './layout/user/user-main-layout/user-main-layout.component';
import { GetProductToCollectionsComponent } from './Components/Products/get-product-to-collections/get-product-to-collections.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteComponent } from './Components/Products/favourite/favourite.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { HomepageComponent } from './Components/Products/homepage/homepage.component';
import { ProductListComponent } from './Components/Products/product-list/product-list.component';
import { CartComponent } from './Components/Products/cart/cart.component';
import { SideNavComponent } from './layout/marketer/side-nav/side-nav.component';
import { TopNavComponent } from './layout/marketer/top-nav/top-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { MarketerSignUpComponent } from './marketer-sign-up/marketer-sign-up.component';
import { MarketerSignInComponent } from './marketer-sign-in/marketer-sign-in.component';
import { AddcollectionComponent } from './addcollection/addcollection.component';
import { AllCollectionComponent } from './all-collection/all-collection.component';
import { CollectionProductsComponent } from './Components/collection-products/collection-products.component';



const routes: Routes = [
  {
    path: 'marketer',
    component: MarketerMainLayoutComponent,
    children:[
      {path:"profile",component:ProfileComponent},
      
   {path:"allCollection",component:AllCollectionComponent},
   {path:"collection/product",component:CollectionProductsComponent},
   {path:"addCollection",component:AddcollectionComponent},
    ]
   },
    

  {path:"",redirectTo:"homepage",pathMatch:"full"},
  //  {path:"marketer",component:SideNavComponent},
   
  //  {path:"home",component:HomepageComponent},
  //  {path:"editprofile",component:ProfileComponent},
   {path:"marketersignup",component:MarketerSignUpComponent},
   {path:"marketersignin",component:MarketerSignInComponent},
  
  {
    path: 'user',
    component: UserMainLayoutComponent,
    children: [
      // { path: '', component: HomepageComponent },
      {path:'favourite',component:FavouriteComponent},
      {path:'get-product-to-collection',component:GetProductToCollectionsComponent},
      {path:'productdetails',component:ProductDetailsComponent},
      {path:'product-list',component:ProductListComponent},
      {path:'cart',component:CartComponent},
      {path:'homepage',component:HomepageComponent}
      
      
      
    ]
   
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
