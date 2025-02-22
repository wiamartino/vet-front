import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = "http://localhost:8080";
  private loginPath = this.baseUrl + "/login";
  private registerPath = this.baseUrl + "/register";

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.loginPath, credentials);
  }

  register(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.registerPath, credentials);
  }

}
