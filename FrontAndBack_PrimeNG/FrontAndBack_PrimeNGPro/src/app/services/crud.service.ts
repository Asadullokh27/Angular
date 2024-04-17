import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { CreateUser } from '../models/createUser';
export interface Message {
  mes:string,
  
}

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  baseUrl: string = "https://api.tohirjon.uz/api/Product/";
  constructor(private http:HttpClient) { }

  getAll(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.baseUrl + 'GetAll')
  }
  create(data: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(this.baseUrl + 'Create', data)
  }
}