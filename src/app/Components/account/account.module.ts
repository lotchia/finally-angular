import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shard/shared.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';



let routes:Routes=[
  {path:'' , redirectTo:'signup',pathMatch:'full'},
  {path:'usersignup',component:UsersignupComponent},
  {path:'login',component:LoginComponent}
  
]


@NgModule({
  declarations: [
    UsersignupComponent,
    LoginComponent,
    ProfileComponent,
    UpdateprofileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
 exports:[
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
