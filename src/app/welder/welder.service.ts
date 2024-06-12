import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}

  


