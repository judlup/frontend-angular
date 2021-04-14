import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor(private http: HttpClient) {}

  get(id): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('https://jsonplaceholder.typicode.com/todos/' + id, {
      headers: headers,
    });
  }
}
