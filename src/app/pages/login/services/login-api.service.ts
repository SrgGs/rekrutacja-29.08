import { Injectable } from '@angular/core';
import { Api } from '@core/enums/api.enum';
import { environment } from '@env/environment';
import { LoginRequest } from '../interfaces/login-request.interface';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response.interface';
import { Observable } from 'rxjs';

@Injectable()
export class LoginApiService {

  constructor(
    private http: HttpClient
  ) { }

  getLogin(formData: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.backendUrl}${Api.LOGIN}`, formData);
  }

}
