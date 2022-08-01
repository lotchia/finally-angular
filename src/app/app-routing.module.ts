
import { MarketerMainLayoutComponent } from './layout/marketer/marketer-main-layout/marketer-main-layout.component';
import { UserMainLayoutComponent } from './layout/user/user-main-layout/user-main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteComponent } from './Components/Products/favourite/favourite.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProductListComponent } from './Components/Products/product-list/product-list.component';
import { CartComponent } from './Components/Products/cart/cart.component';
import { ProfileComponent } from './Components/account/profile/profile.component';
import { MarketerSignUpComponent } from './Components/account/marketer-sign-up/marketer-sign-up.component';
import { AddcollectionComponent } from './Components/Marketer/addcollection/addcollection.component';
import { AllCollectionComponent } from './Components/Marketer/all-collection/all-collection.component';
import { CollectionProductsComponent } from './Components/Marketer/collection-products/collection-products.component';
import { UsersignupComponent } from './Components/account/usersignup/usersignup.component';
import { LoginComponent } from './Components/account/login/login.component';
import { UpdateprofileComponent } from './Components/account/updateprofile/updateprofile.component';
import { UserProfileComponent } from './Components/account/userprofile/userprofile.component';
import { CollectionComponent } from './Components/Marketer/collection/collection.component';
import { MarketerWalletComponent } from './Components/Marketer/marketer-wallet/marketer-wallet.component';
import { MarketerHomeComponent } from './Components/Marketer/marketer-home/marketer-home.component';
import { IntroComponent } from './intro/intro.component';
import { AuthGuard } from './guard/auth.guard';
import { IsMarketerGuard } from './guard/is-marketer.guard';

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  
  { path: 'intro', component: IntroComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'usersignup', component: UsersignupComponent },
  { path: 'login', component: LoginComponent },
   {path:"marketersignup",component:MarketerSignUpComponent},
  {
    path: 'marketer',
    component: MarketerMainLayoutComponent,
    canActivate:[AuthGuard,IsMarketerGuard],
    children: [
      { path: "", redirectTo:"home",pathMatch:"full" },
      { path: "home", component: MarketerHomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "allCollection", component: AllCollectionComponent },
      { path: "addCollection", component: AddcollectionComponent },
      {path:"collectionproducts/:id",component:CollectionProductsComponent},
      {path:"collectiondetails/:id",component:CollectionComponent},
      {path:"wallet",component:MarketerWalletComponent},
      { path: 'updateprofile/:id', component: UpdateprofileComponent },
    ]
  },
  {
    path: 'user',
    component: UserMainLayoutComponent,
    children: [
      { path: "", redirectTo: "product-list", pathMatch: "full" },
      { path: 'profile', component: UserProfileComponent },
      { path: 'updateprofile/:id', component: UpdateprofileComponent },
      { path: 'favourite', component: FavouriteComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
