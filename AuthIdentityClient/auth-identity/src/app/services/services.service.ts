import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environment/environments.developers';
import { Router } from '@angular/router';
import { LoginRequest } from '../interfaces/login-request';
import { Observable, map } from 'rxjs';
import { LoginResponse } from '../interfaces/login-responce';
import { RegisterRequest } from '../interfaces/register-request';
import { RegisterResponse } from '../interfaces/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';
  router = inject(Router)

  login(data: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}Auth/Login/Login`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
          localStorage.setItem(this.tokenKey, response.token)
        }
        return response
      })
    );
  }


  register(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}Auth/Register`, data).pipe(
      map((response) => {
        if (response.IsSuccess) {
          this.router.navigate(['/login'])
        }
        return response;
      })
    );
  }
}
