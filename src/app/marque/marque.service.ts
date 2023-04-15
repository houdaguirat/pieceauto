import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marque } from './marque';
@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Marque[]>('http://localhost:8080/Marque');
  }
  create(payload: Marque) {
    return this.http.post<Marque>('http://localhost:8080/Marque', payload);
  }
  getById(id: number) {
    return this.http.get<Marque>(`http://localhost:8080/Marque/${id}`);
   }
    
   update(payload:Marque){
    return this.http.put(`http://localhost:8080/Marque/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Marque>(`http://localhost:8080/Marque/${id}`);
 }
}