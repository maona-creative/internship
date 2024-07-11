import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Welder } from './welder';






@Injectable({
  providedIn: 'root'
})
export class WelderService {

  private baseUrl = 'http://localhost:3000/welders';

  constructor(private http: HttpClient) { }

  getWelders(): Observable<Welder[]> {
    return this.http.get<Welder[]>(this.baseUrl);
  }

 addWelder(welder: Welder): Observable<Welder> {
  return this.http.post<Welder>(this.baseUrl, welder);
}

updateWelder(welder: Welder): Observable<Welder> {
  const url = `${this.baseUrl}/${welder.id}`;
  return this.http.put<Welder>(url, welder);
}

deleteWelder(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}


}


  


