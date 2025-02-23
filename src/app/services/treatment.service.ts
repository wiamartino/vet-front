import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TreatmentService {
  private baseUrl = "http://localhost:8080/treatments";

  constructor(private http: HttpClient) {}

  getTreatments(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getTreatment(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createTreatment(treatment: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, treatment);
  }

  updateTreatment(id: number, treatment: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, treatment);
  }

  deleteTreatment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
