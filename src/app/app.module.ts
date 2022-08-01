import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketerMainLayoutComponent } from './layout/marketer/marketer-main-layout/marketer-main-layout.component';
import { SideNavTogglerComponent } from './layout/marketer/side-nav-toggler/side-nav-toggler.component';
import { SideNavComponent } from './layout/marketer/side-nav/side-nav.component';
import { TopNavComponent } from './layout/marketer/top-nav/top-nav.component';
import { UserMainLayoutComponent } from './layout/user/user-main-layout/user-main-layout.component';
import { NavComponent } from './layout/user/nav/nav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GetCollectionsComponent } from './Components/get-collections/get-collections.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { SharedModule } from './shard/shared.module';
import { HomepageComponent } from './Components/Products/homepage/homepage.component';
import { GetProductToCollectionsComponent } from './Components/Products/get-product-to-collections/get-product-to-collections.component';
import { ProfileComponent } from './profile/profile.component';
import { MarketerSignUpComponent } from './marketer-sign-up/marketer-sign-up.component';
import { MarketerSignInComponent } from './marketer-sign-in/marketer-sign-in.component';
import { AddcollectionComponent } from './addcollection/addcollection.component';
import { AllCollectionComponent } from './all-collection/all-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { CollectionProductsComponent } from './Components/collection-products/collection-products.component';
import { CartComponent } from './Components/Products/cart/cart.component';
import { FavouriteComponent } from './Components/Products/favourite/favourite.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { ProductListComponent } from './Components/Products/product-list/product-list.component';
import { UserProfileComponent } from './Components/account/profile/profile.component';
import { UserSignupViewModel } from './Models/userSignUpViewModel';
import { UsersignupComponent } from './Components/account/usersignup/usersignup.component';
import { LoginComponent } from './Components/account/login/login.component';
import { UpdateprofileComponent } from './Components/account/updateprofile/updateprofile.component';
import { CollectionComponent } from './Components/collection/collection.component';
import { MarketerWalletComponent } from './marketer-wallet/marketer-wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageContentComponent,
    //marketer
    SideNavComponent,
    SideNavTogglerComponent,
    TopNavComponent,
    MarketerMainLayoutComponent,
    MarketerSignUpComponent,
    MarketerSignInComponent,
    GetCollectionsComponent,
    GetProductToCollectionsComponent,
    ProfileComponent,
    CollectionProductsComponent,
    CollectionComponent,
    MarketerWalletComponent,
    AddcollectionComponent,
    AllCollectionComponent,
    CollectionProductsComponent,
    /////USER
    NavComponent,
    UserMainLayoutComponent,
    UsersignupComponent,
    LoginComponent,
    UserProfileComponent,
    UpdateprofileComponent,
    CartComponent,
    FavouriteComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
