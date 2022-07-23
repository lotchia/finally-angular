import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketerService {

  constructor(private http : HttpClient) { }

  getmarketerById(id:any)
{
  return this.http.get<any>("https://localhost:63000/Marketer/GetOne?_id="+id)
}
updatemarketer()
{
  return this.http.get<any>("https://localhost:63000/user/update")
  .pipe(map((res:any)=>{
    return res
  }))
}

}
