import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketerMainLayoutComponent } from './layout/marketer/marketer-main-layout/marketer-main-layout.component';
import { SideNavTogglerComponent } from './layout/marketer/side-nav-toggler/side-nav-toggler.component';
import { SideNavComponent } from './layout/marketer/side-nav/side-nav.component';
import { TopNavComponent } from './layout/marketer/top-nav/top-nav.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { FooterComponent } from './layout/user/footer/footer.component';
import { UserMainLayoutComponent } from './layout/user/user-main-layout/user-main-layout.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MarketerPageComponent } from './Components/marketer-page/marketer-page.component';
import { NavComponent } from './layout/user/nav/nav.component';
import { ProductComponent } from './Components/product/product.component';
import { CollectionComponent } from './Components/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketerPageComponent,
    SideNavComponent,
    SideNavTogglerComponent,
    TopNavComponent,
    MarketerMainLayoutComponent,
    LandingPageComponent,
    FooterComponent,
    NavComponent,
    UserMainLayoutComponent,
    PageContentComponent,
    ProductComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
