import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private apiUrl = '../assets/mentor.json';

  constructor(private http: HttpClient) { }
  
  getMentors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
