import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VeterinarianService {
  private baseUrl = "http://localhost:8080/veterinarians";

  constructor(private http: HttpClient) {}

  getVeterinarians(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getVeterinarian(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createVeterinarian(veterinarian: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, veterinarian);
  }

  updateVeterinarian(id: number, veterinarian: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, veterinarian);
  }

  deleteVeterinarian(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
