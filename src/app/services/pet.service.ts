import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PetService {
  private baseUrl = "http://localhost:8080/pets";

  constructor(private http: HttpClient) {}

  getPets(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getPet(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createPet(pet: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, pet);
  }

  updatePet(id: number, pet: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, pet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
