import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MedicationService {
  private baseUrl = "http://localhost:8080/medications";

  constructor(private http: HttpClient) {}

  getMedications(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getMedication(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createMedication(medication: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, medication);
  }

  updateMedication(id: number, medication: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, medication);
  }

  deleteMedication(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
