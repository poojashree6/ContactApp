import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactModel } from '../contacts/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactservicesService {
  getgroup() {
    throw new Error('Method not implemented.');
  }

  baseurl:string="http://localhost:3000/contact"

  //loacl variable http referring to httpclient instance

  constructor(private http:HttpClient) { }    
  
  getcontact() {
    return this.http.get<contactModel[]>(this.baseurl)
      
  }

  postcontact(data: any) {
    return this.http.post<contactModel>("http://localhost:3000/contact", data)
      
  }
  
  deletecontact(id: number) {
    return this.http.delete<contactModel>(this.baseurl + '/' + id)
     
  }
  updatecontact(data: any, id: number) {
    return this.http.put<contactModel>(this.baseurl + '/' + id, data)
     
  }
  fetchdata(group:string){
    return this.http.get<contactModel[]>(this.baseurl + '?group=' + group); 
  }
}

