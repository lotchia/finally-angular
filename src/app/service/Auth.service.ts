import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    constructor(){

    }
    getToken(){
       
        return localStorage.getItem("Token")
    }
    getHeaderForHTTP(){
        
        let headers = new HttpHeaders({  
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`,
         });
         
        return{ headers: headers };
        
    }
    // localStorage.setItem('Token', res.token);
    //     localStorage.setItem('username', value.Email);
    //     localStorage.setItem('role', res.role);
    //     localStorage.setItem("id", res.id);
    GetCurrentUserID():string{
        return localStorage.getItem("id")??""
    }
}