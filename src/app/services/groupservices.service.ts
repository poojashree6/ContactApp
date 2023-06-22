import { Injectable } from '@angular/core';
import { groupModel } from '../contactgroups/contactgroup.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupservicesService {

  constructor( private http:HttpClient) { }
  baseurl: string = "http://localhost:3000/group"

  postgroup(data: any) {
    return this.http.post<groupModel>("http://localhost:3000/group", data)
     
  }
  getgroup() {
    return this.http.get<groupModel[]>(this.baseurl)
      
  }

  deletegroup(id: number) {
    return this.http.delete<groupModel>(this.baseurl + '/' + id)
      
  }
  updategroup(data: any, id: number) {
    return this.http.put<groupModel>(this.baseurl + '/' + id, data)
      
  }
}
