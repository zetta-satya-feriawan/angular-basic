import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
constructor(private http : HttpClient ) { }

getPosts(): Observable<any>{
  return this.http.get<any>(this.apiUrl)
}

createPost(post :any): Observable<any>{
  return this.http.post<any>(this.apiUrl, post)
}

updatePost(post:any): Observable<any>{
  const url = `${this.apiUrl}/${post.id}`;
  return this.http.put<any>(url, post)
}
}
